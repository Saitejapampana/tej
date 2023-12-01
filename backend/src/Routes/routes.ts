import express from "express";
import {getdata,postdata,deleteData,updateData,getOnedata} from '../Controller/controll'

const hate=express.Router();

hate.get('/vachey', getdata);
hate.get('/vachey/:_id', getOnedata);
hate.post('/vellipo', postdata);
hate.delete('/sachipo/:_id',deleteData)
hate.put('/maripo/:_id',updateData)

export default hate;