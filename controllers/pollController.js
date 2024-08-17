import express from "express";
import constants from "../constants.js";

const sampleData=[{
	"routeNo":"9A",
	"routeId":"505",
	"name":"Poonamalle",
    "type":"NONAC",
	"stops":[{
		"name":"Karayanchavadi",
		"lat":13.047380628699885,
		"long":80.109635553246
	},
    {
		"name":"porur",
		"lat":13.036237000868617,
		"long": 80.14912287676385
	},
	{
		"name":"Gerugambakkam",
		"lat":13.011599342507768, 
		"long": 80.1288963376111
	},
	{
		"name":"Kamarajapuram",
		"lat":12.971820296089376, 
		"long": 80.11849074643403
	},
	{
		"name":"Tiruneermalai",
		"lat":12.957483031180852, 
		"long":80.11939149942077
	},
	{
		"name":"Thambaram",
		"lat":12.92574814260217, 
		"long":80.10034995323802
	},
	{
		"name":"Vandalur",
		"lat":12.879626716612924, 
		"long":80.08007905737011
	},
    {
		"name":"VIT CHENNAI",
		"lat":12.840561042795008,
		"long":80.15310348748496
	}]
}]

const router = express.Router()

router.get("/",(req,res)=>{
    res.status(200).json(sampleData)
})

export default router;