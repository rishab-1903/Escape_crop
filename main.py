import streamlit as st
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier

st.set_page_config(page_title="Demo Labtest")

url = 'http://localhost:5173/'
if st.button('Go to Home Page'):
    st.markdown(f'<a href="{url}" target="_blank">Click here to go to home page</a>', unsafe_allow_html=True)

def book_lab_test():
    st.title("Book a Lab Test")
    name = st.text_input("Name")
    phone_number = st.text_input("Phone Number")
    address = st.text_area("Address")
    state = st.selectbox("State",
                         ['States', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
                          'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
                          'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
                          'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
                          'Uttarakhand', 'West Bengal']
                         )
    borewell_connection = st.radio("Do you have a borewell connection?", options=["Yes", "No"])

    if st.button("Submit Lab Test Request"):

        if name.strip() == "":
            st.error("Please enter your name")
        elif phone_number.strip() == "":
            st.error("Please enter your phone number")
        elif address.strip() == "":
            st.error("Please enter your address")
        elif state == "Select State":
            st.error("Please select your state")
        elif borewell_connection == "":
            st.error("Please select whether you have a borewell connection or not")
        else:
            st.success("Lab test request submitted successfully. We will contact you soon.")

crop_data = pd.read_csv("Crop_recommendation.csv")

def knn_predictor(n, p, k, temperature, humidity, ph, rainfall):
    X = crop_data.iloc[:, :-1]
    y = crop_data.iloc[:, -1]

    knn = KNeighborsClassifier(n_neighbors=5)

    knn.fit(X, y)

    prediction = knn.predict([[n, p, k, temperature, humidity, ph, rainfall]])

    return prediction[0]


def app():
    st.title("Demo Labtest")

    # Add input fields for the model
    n = st.number_input("Nitrogen content (in ppm)", value=0.0)
    p = st.number_input("Phosphorous content (in ppm)", value=0.0)
    k = st.number_input("Potassium content (in ppm)", value=0.0)
    temperature = st.number_input("Temperature (in degree Celsius)", value=0.0)
    humidity = st.number_input("Humidity (in %)", value=0.0)
    ph = st.number_input("pH value", value=0.0)
    rainfall = st.number_input("Rainfall (in mm)", value=0.0)

    if st.button("Get Crop Recommendation"):
        prediction = knn_predictor(n, p, k, temperature, humidity, ph, rainfall)
        st.success(f"Recommended crop: {prediction}")\

if __name__ == "__main__":
    book_lab_test()
    app()