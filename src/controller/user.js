
const Service = require ('../schema/serviceSchema.js')
const mongoose = require('mongoose')
const seedServices = async () => {
    try {
    const services = [
      {
        type: "rubbish_removal",
        category: "household",
        description: "Includes furniture, appliances, and general clutter",
        pricing: [
          { label: "Small Load (up to 250kg)", price: 75 },
          { label: "Medium Load (up to 500kg)", price: 150 },
          { label: "Full Load (up to 1,000kg)", price: 250 },
        ],
      },

      {
        type: "rubbish_removal",
        category: "Commercial",
        description: "Includes office equipment, retail waste, and more",
        pricing: [
          { label: "Small office clearance", price: 125 },
          { label: "Medium office clearance", price: 225 },
          { label: "Large office clearance", price: 350 },
        ],
      },
      {
        type: "rubbish_removal",
        category: "Construction",
        description: "Includes bricks, rubble, and debris",
        pricing: [
          { label: "Rubble bag (per bag)", price: 50 },
          { label: "Half load", price: 200  },
          { label: "Full load", price: 400 },
        ],
      },
      {
        type: "Parcel Delivery ",
        category: "Same-Day",
        description: "Ideal for urgent parcels.",
        pricing: [
          { label: "Starting at", price: 10 },
        ],
      },
      {
        type: "Parcel Delivery ",
        category: "Scheduled",
        description: "Flexible options to meet your timeline.",
        pricing: [
          { label: "Starting at", price: 8 },
        ],
      },
      {
        type: "Parcel Delivery ",
        category: "Local & Regional",
        description: "Affordable and efficient solutions for individuals and businesses",
        pricing: [
          { label: "Rubble bag (per bag)", price: 50 },
          { label: "Half load", price: 200  },
          { label: "Full load", price: 400 },
        ],
      },
      
    ];
  
    // await Service.insertMany(services);
    // console.log("Services seeded!");

    for (const service of services) {
        const existingService = await Service.findOne({ category: service.category });
  
        if (existingService) {
          console.log(`Service of type '${service.category}' already exists.`);
        } else {
          await Service.create(service);
          console.log(`Service of type '${service.category}' has been added.`);
        }
      }
  
      console.log("Seeding process completed!");
    } catch (error) {
      console.error("Error while seeding services:", error);
    } 
  
  };
  
  seedServices();


  const findAll = async (req, res) => {
    try {
      const data = await Service.find();
      res.status(200).json(data); // Send data as JSON with a 200 status
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).send("Error fetching services");
    }
  };
  const contactData = async (req, res) => {
    console.log("object");
    try {
      // const data = await Service.find();
      console.log(req.body);
      res.status(200).json(req.body); // Send data as JSON with a 200 status
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).send("Error fetching services");
    }
  };
  


module.exports = {
    findAll,
    contactData

};
