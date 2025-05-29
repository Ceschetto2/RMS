const {Events} = require('../../models');


exports.getAllEvents =  async (req, res) => {
    try {
        const events = await Events.findAll({
            order: [['start', 'ASC']]
        });

        res.json(events);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch events data" });
    }
}

exports.addSingleEvent =  async (req, res) => {
    try {

        const newEvent = await Events.create({
            ...req.body,
            createdBy:req.user.user_id
        });

        res.status(201).json(newEvent);
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ error: "Failed to create event" });
    }
}

exports.addMultipleEvents =  async (req, res) => {
    try {
        const eventsData = req.body.events.map(event => ({
            ...event,
            createdBy: req.user.user_id
        }));
        const createdEvents = await Events.bulkCreate(eventsData);

        res.status(201).json(createdEvents);
    } catch (error) {
        console.error("Error creating multiple events:", error);
        res.status(500).json({ error: "Failed to create multiple events" });
    }
}