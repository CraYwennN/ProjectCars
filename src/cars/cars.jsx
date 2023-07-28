import porsche911 from "../cars/porsche918.png"
import taycan from "../cars/taycanfinal.png"
import macan from "../cars/macanfinal.png"
import cayenne from"../cars/cayenne.png"
import panamera from "../cars/panamerafinal.png"
import porsche718 from "../cars/porsche718final.png"



const Cars = [
    {
        "Id": 1,
        "Name": "Audi E-tron GT quattro",
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
        "Name": "Lamborghini Aventador",
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
        "Name": "BMW 3 Series",
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
        "Name": "Honda Civic",
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
        "Name": "Mercedes-Benz C-Class",
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
        "Name": "Chevrolet Corvette",
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
      {
        "Id": 7,
        "Name": "Volkswagen Golf",
        "Year of making": 2022,
        "Engine Type": "Petrol",
        "Top speed": 130,
        "Origin": "Germany",
        "img": "",
        "Engine Details": {
          "Displacement": "1.5L",
          "Cylinders": 4,
          "Transmission": "Manual",
          "Horsepower": 147
        },
        "Interior": {
          "Seating Capacity": 5,
          "Infotainment System": "6.5-inch touchscreen",
          "Interior Color Options": ["Black", "Gray", "Beige"]
        }
      },
      {
        "Id": 8,
        "Name": "Audi A4",
        "Year of making": 2023,
        "Engine Type": "Gasoline",
        "Top speed": 155,
        "Origin": "Germany",
        "img": "",
        "Engine Details": {
          "Displacement": "2.0L",
          "Cylinders": 4,
          "Transmission": "Automatic",
          "Horsepower": 201
        },
        "Interior": {
          "Seating Capacity": 5,
          "Infotainment System": "10.1-inch touchscreen",
          "Interior Color Options": ["Black", "Brown", "Gray"]
        }
      },
      {
        "Id": 9,
        "Name": "Jeep Wrangler",
        "Year of making": 2022,
        "Engine Type": "Gasoline",
        "Top speed": 180,
        "Origin": "United States",
        "img": "",
        "Engine Details": {
          "Displacement": "3.6L",
          "Cylinders": 6,
          "Transmission": "Automatic",
          "Horsepower": 285
        },
        "Interior": {
          "Seating Capacity": 4,
          "Infotainment System": "7-inch touchscreen",
          "Interior Color Options": ["Black", "Gray", "Tan"]
        }
      },
      {
        "Id": 10,
        "Name": "Nissan GT-R",
        "Year of making": 2023,
        "Engine Type": "Gasoline",
        "Top speed": 195,
        "Origin": "Japan",
        "img": "",
        "Engine Details": {
          "Displacement": "5.2L",
          "Cylinders": 8,
          "Transmission": "Automatic",
          "Horsepower": 300
          },
          "Interior": {
            "Seating Capacity": 4,
            "Infotainment System": "7-inch touchscreen",
            "Interior Color Options": ["Black", "Gray", "Tan"]
          } 
          }
]

export {Cars}