import porsche911 from "../cars/porsche918.png"
import taycan from "../cars/taycanfinal.png"
import macan from "../cars/macanfinal.png"
import cayenne from"../cars/cayenne.png"
import panamera from "../cars/panamerafinal.png"
import porsche718 from "../cars/porsche718final.png"



const Cars = [
    {
        "Id": 1,
        "Name": "Porsche 911",
        "Model":"911",
        "Year of making": 2023,
        "Engine Type": "Electric",
        "Top speed": 245,
        "Origin": "Japan",
        "img": porsche911,
        "Engine Details": {
          "Displacement": "",
          "Cylinders": "",
          "Transmission": "Automatic",
          "Horsepower": 203,
          "KW":350,
        },
        "Interior": {
          "Seating Capacity": 5,
          "Infotainment System": "8-inch touchscreen",
          "Interior Color Options": ["Black", "Beige", "Gray"]
        },
        "Transmision": {
          "Seating Capacity": 5,
          
        }
      },
      {
        "Id": 2,
        "Name": "Porsche 718",
        "Model":"718",
        "Year of making": 2022,
        "Engine Type": "Gasoline",
        "Top speed": 180,
        "Origin": "United States",
        "img": porsche718,
        "Engine Details": {
          "Displacement": "6.5L",
          "Cylinders": "V12",
          "Transmission": "Semi-automatic",
          "Horsepower": 690,
          "KW":515,
        },
        "Interior": {
          "Seating Capacity": 4,
          "Infotainment System": "12-inch touchscreen",
          "Interior Color Options": ["Black", "Red", "White"]
        }
      },
      {
        "Id": 3,
        "Name": "Prosche Taycan",
        "Model":"Taycan",
        "Year of making": 2020,
        "Engine Type": "Diesel",
        "Top speed": 220,
        "Origin": "Germany",
        "img": taycan,
        "Engine Details": {
          "Displacement": "2.0L",
          "Cylinders": 4,
          "Transmission": "Automatic",
          "Horsepower": 190
        },
        "Interior": {
          "Seating Capacity": 5,
          "Infotainment System": "10.25-inch touchscreen",
          "Interior Color Options": ["Black", "Brown", "Beige"]
        }
      },
      {
        "Id": 4,
        "Name": "Porsche Panamera",
        "Model":"Panamera",
        "Year of making": 2023,
        "Engine Type": "Petrol",
        "Top speed": 160,
        "Origin": "Japan",
        "img": panamera,
        "Engine Details": {
          "Displacement": "1.5L",
          "Cylinders": 4,
          "Transmission": "CVT",
          "Horsepower": 174
        },
        "Interior": {
          "Seating Capacity": 5,
          "Infotainment System": "7-inch touchscreen",
          "Interior Color Options": ["Black", "Gray", "Ivory"]
        }
      },
      {
        "Id": 5,
        "Name": "Porsche Macan",
        "Model":"Macan",
        "Year of making": 2022,
        "Engine Type": "Gasoline",
        "Top speed": 200,
        "Origin": "Germany",
        "img": macan,
        "Engine Details": {
          "Displacement": "2.0L",
          "Cylinders": 4,
          "Transmission": "Automatic",
          "Horsepower": 255
        },
        "Interior": {
          "Seating Capacity": 5,
          "Infotainment System": "10.25-inch touchscreen",
          "Interior Color Options": ["Black", "Beige", "Brown"]
        }
      },
      {
        "Id": 6,
        "Name": "Porsche Cayenne",
        "Model":"Cayenne",
        "Year of making": 2023,
        "Engine Type": "Gasoline",
        "Top speed": 205,
        "Origin": "United States",
        "img": cayenne,
        "Engine Details": {
          "Displacement": "6.2L",
          "Cylinders": 8,
          "Transmission": "Automatic",
          "Horsepower": 495
        },
        "Interior": {
          "Seating Capacity": 2,
          "Infotainment System": "8-inch touchscreen",
          "Interior Color Options": ["Black", "Red", "Gray"]
        }
      },
      
]

export {Cars}