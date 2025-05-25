const express = require('express');
const {InternalRegulations} = require("../../models");

exports.getRegulations = async(req,res) => {
    const response = await InternalRegulations.findAll()
    res.json(response);
}


exports.sendRegulations = async(req,res) => {
    const rules = req.body
    await InternalRegulations.bulkCreate(rules)
    res.json("Inserimento avvenuto con successo")
}
