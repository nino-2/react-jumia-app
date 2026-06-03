import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

const AddressEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);

 
  // FETCH LIST OF STATES
 
  useEffect(() => {
    axios
      .get(`${API_URL}/api/states`)
      .then((response) => {
        setStates(response.data.states || []);
      })
      .catch((err) => console.log("State fetch error:", err));
  }, []);

 
  // FETCH CITIES FOR STATE
  
  const fetchCities = (stateName) => {
    if (!stateName) return;

    axios
      .get(`${API_URL}/api/states/${stateName}`)
      .then((response) => setCities(response.data.cities || []))
      .catch((err) => console.log("City fetch error:", err));
  };

  
  // FETCH ADDRESS BY ID

  useEffect(() => {
    setLoading(true);
    setAddress(null);     //  Clears stale address
    formik.resetForm();   //  Clears old values when switching address

    axios
      .get(`${API_URL}/address/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAddress(res.data.data);
      })
      .catch((err) =>
        console.log("Fetch address err:", err?.response?.data || err.message)
      )
      .finally(() => setLoading(false));
  }, [id]);

  
  // FORM handling
  
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      addphonenum: "",
      deliveryadd: "",
      addinfo: "",
      state: "",
      city: "",
    },
    enableReinitialize: true,

    onSubmit: async (values) => {
      try {
        await axios.put(`${API_URL}/address/${id}`, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        navigate("/customer/address");
      } catch (error) {
        console.log("Update error:", error);
      }
    },
  });

  // -----------------------------
  // SET FORM VALUES AFTER FETCH
  // -----------------------------
  useEffect(() => {
    if (address) {
      formik.setValues({
        firstname: address.firstname || "",
        lastname: address.lastname || "",
        phonenumber: address.phonenumber || "",
        addphonenum: address.addphonenum || "",
        deliveryadd: address.deliveryadd || "",
        addinfo: address.addinfo || "",
        state: address.state || "",
        city: address.city || "",
      });

      // Fetch cities for the state
      if (address.state) fetchCities(address.state);
    }
  }, [address]);

  // Fetch cities anytime state changes manually
  useEffect(() => {
    if (formik.values.state) fetchCities(formik.values.state);
  }, [formik.values.state]);

  // -----------------------------
  // UI
  // -----------------------------
  if (loading || !address) return <p>Loading address...</p>;

  return (
    <div className="int-crd php">
      <div className="edt-head">
        <Link to="/customer/address" className="edt-go">
          <img src="/arrow-left.png" alt="" />
        </Link>
        <h1 className="acc-text">Edit Address</h1>
      </div>

      <form onSubmit={formik.handleSubmit} className="edt-form">
        <div className="edt-col16">
          <div className="edt-cont">
            <input
              name="firstname"
              placeholder="Enter your First Name"
              className="edt-inp"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
            <label className="edt-lbl">First Name</label>
          </div>

          <div className="edt-contx">
            <input
              name="lastname"
              placeholder="Enter your Last Name"
              className="edt-inp"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastname}
            />
            <label className="edt-lbl">Last Name</label>
          </div>
        </div>

        <div className="edt-col16p">
          <div className="edt-col8">
            <div className="edt-prefix">
              <div className="edt-npt">+234</div>
              <label className="edt-lbl">Prefix</label>
            </div>

            <div className="edt-conty">
              <input
                name="phonenumber"
                placeholder="Enter your Phone Number"
                className="edt-inp"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phonenumber}
              />
              <label className="edt-lbl">Phone Number</label>
            </div>
          </div>

          <div className="edt-col8b">
            <div className="edt-prefix">
              <div className="edt-npt">+234</div>
              <label className="edt-lbl">Prefix</label>
            </div>

            <div className="edt-conty">
              <input
                name="addphonenum"
                placeholder="Enter your Additional Phone Number"
                className="edt-inp"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.addphonenum}
              />
              <label className="edt-lbl">Additional Phone Number</label>
            </div>
          </div>
        </div>

        <div className="edt-col16t">
          <div className="edt-prefix">
            <input
              name="deliveryadd"
              placeholder="Enter your Delivery Address"
              className="edt-inp"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.deliveryadd}
            />
            <label className="edt-lbl">Delivery Address</label>
          </div>

          <div className="edt-prefix">
            <input
              name="addinfo"
              placeholder="Enter your Additional Information"
              className="edt-inp"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.addinfo}
            />
            <label className="edt-lbl">Additional Information</label>
          </div>
        </div>

        <div className="edt-col16">
          <div className="edt-cont">
            <select
              className="sel"
              name="state"
              onChange={formik.handleChange}
              value={formik.values.state}
            >
              <option disabled>Please Select</option>

              {states.map((state) => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            <label className="edt-lbl">State</label>
          </div>

          <div className="edt-contx">
            <select
              required
              className="sel"
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
            >
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            <label className="edt-lbl">City</label>
          </div>
        </div>

        <div className="edt-col0">
          <div className="edt-contb">
            <button type="submit" className="edt-btn">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressEdit;
