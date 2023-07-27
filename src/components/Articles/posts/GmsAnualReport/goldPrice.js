import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const cdata = [
  {
    date: new Date(2023, 6, 25).toLocaleDateString(),
    price: 112200,
  },
  {
    date: new Date(2023, 6, 24).toLocaleDateString(),
    price: 112000,
  },
  {
    date: new Date(2023, 6, 23).toLocaleDateString(),
    price: 112300,
  },
  {
    date: new Date(2023, 6, 22).toLocaleDateString(),
    price: 112800,
  },
  {
    date: new Date(2023, 6, 21).toLocaleDateString(),
    price: 112800,
  },
  {
    date: new Date(2023, 6, 20).toLocaleDateString(),
    price: 113600,
  },
  {
    date: new Date(2023, 6, 19).toLocaleDateString(),
    price: 113100,
  },
  {
    date: new Date(2023, 6, 18).toLocaleDateString(),
    price: 112500,
  },
  {
    date: new Date(2023, 6, 17).toLocaleDateString(),
    price: 112200,
  },
  {
    date: new Date(2023, 6, 16).toLocaleDateString(),
    price: 112200,
  },
  {
    date: new Date(2023, 6, 15).toLocaleDateString(),
    price: 112500,
  },
  {
    date: new Date(2023, 6, 14).toLocaleDateString(),
    price: 112500,
  },
  {
    date: new Date(2023, 6, 13).toLocaleDateString(),
    price: 112400,
  },
  {
    date: new Date(2023, 6, 12).toLocaleDateString(),
    price: 111600,
  },
  {
    date: new Date(2023, 6, 11).toLocaleDateString(),
    price: 111300,
  },
  {
    date: new Date(2023, 6, 10).toLocaleDateString(),
    price: 111300,
  },
  {
    date: new Date(2023, 6, 9).toLocaleDateString(),
    price: 111300,
  },
  {
    date: new Date(2023, 6, 8).toLocaleDateString(),
    price: 110600,
  },
  {
    date: new Date(2023, 6, 7).toLocaleDateString(),
    price: 110600,
  },
  {
    date: new Date(2023, 6, 6).toLocaleDateString(),
    price: 110700,
  },
  {
    date: new Date(2023, 6, 5).toLocaleDateString(),
    price: 110600,
  },
  {
    date: new Date(2023, 6, 4).toLocaleDateString(),
    price: 110400,
  },
  {
    date: new Date(2023, 6, 3).toLocaleDateString(),
    price: 110000,
  },
  {
    date: new Date(2023, 6, 2).toLocaleDateString(),
    price: 110100,
  },
  {
    date: new Date(2023, 6, 1).toLocaleDateString(),
    price: 109600,
  },
  {
    date: new Date(2023, 5, 30).toLocaleDateString(),
    price: 109600,
  },
  {
    date: new Date(2023, 5, 29).toLocaleDateString(),
    price: 109400,
  },
  {
    date: new Date(2023, 5, 26).toLocaleDateString(),
    price: 110400,
  },
  {
    date: new Date(2023, 5, 25).toLocaleDateString(),
    price: 110200,
  },
  {
    date: new Date(2023, 5, 24).toLocaleDateString(),
    price: 109800,
  },
  {
    date: new Date(2023, 5, 23).toLocaleDateString(),
    price: 109800,
  },
  {
    date: new Date(2023, 5, 22).toLocaleDateString(),
    price: 110500,
  },
  {
    date: new Date(2023, 5, 21).toLocaleDateString(),
    price: 111000,
  },
  {
    date: new Date(2023, 5, 20).toLocaleDateString(),
    price: 111800,
  },
  {
    date: new Date(2023, 5, 19).toLocaleDateString(),
    price: 112000,
  },
  {
    date: new Date(2023, 5, 18).toLocaleDateString(),
    price: 112000,
  },
  {
    date: new Date(2023, 5, 17).toLocaleDateString(),
    price: 111800,
  },
  {
    date: new Date(2023, 5, 16).toLocaleDateString(),
    price: 111800,
  },
  {
    date: new Date(2023, 5, 15).toLocaleDateString(),
    price: 111000,
  },
  {
    date: new Date(2023, 5, 14).toLocaleDateString(),
    price: 111800,
  },
  {
    date: new Date(2023, 5, 13).toLocaleDateString(),
    price: 112700,
  },
  {
    date: new Date(2023, 5, 12).toLocaleDateString(),
    price: 112400,
  },
  {
    date: new Date(2023, 5, 11).toLocaleDateString(),
    price: 112500,
  },
  {
    date: new Date(2023, 5, 10).toLocaleDateString(),
    price: 112500,
  },
  {
    date: new Date(2023, 5, 9).toLocaleDateString(),
    price: 112500,
  },
  {
    date: new Date(2023, 5, 8).toLocaleDateString(),
    price: 111700,
  },
  {
    date: new Date(2023, 5, 7).toLocaleDateString(),
    price: 112700,
  },
  {
    date: new Date(2023, 5, 6).toLocaleDateString(),
    price: 112500,
  },
  {
    date: new Date(2023, 5, 5).toLocaleDateString(),
    price: 111600,
  },
  {
    date: new Date(2023, 5, 4).toLocaleDateString(),
    price: 111600,
  },
  {
    date: new Date(2023, 5, 3).toLocaleDateString(),
    price: 113300,
  },
  {
    date: new Date(2023, 5, 2).toLocaleDateString(),
    price: 113300,
  },
  {
    date: new Date(2023, 5, 1).toLocaleDateString(),
    price: 112500,
  },
  {
    date: new Date(2023, 4, 31).toLocaleDateString(),
    price: 110500,
  },
  {
    date: new Date(2023, 4, 30).toLocaleDateString(),
    price: 108100,
  },
  {
    date: new Date(2023, 4, 29).toLocaleDateString(),
    price: 108100,
  },
  {
    date: new Date(2023, 4, 28).toLocaleDateString(),
    price: 108100,
  },
  {
    date: new Date(2023, 4, 27).toLocaleDateString(),
    price: 108300,
  },
  {
    date: new Date(2023, 4, 26).toLocaleDateString(),
    price: 108300,
  },
  {
    date: new Date(2023, 4, 25).toLocaleDateString(),
    price: 108800,
  },
  {
    date: new Date(2023, 4, 24).toLocaleDateString(),
    price: 109800,
  },
  {
    date: new Date(2023, 4, 23).toLocaleDateString(),
    price: 109200,
  },
  {
    date: new Date(2023, 4, 22).toLocaleDateString(),
    price: 110000,
  },
  {
    date: new Date(2023, 4, 21).toLocaleDateString(),
    price: 110000,
  },
  {
    date: new Date(2023, 4, 20).toLocaleDateString(),
    price: 109200,
  },
  {
    date: new Date(2023, 4, 19).toLocaleDateString(),
    price: 109200,
  },
  {
    date: new Date(2023, 4, 18).toLocaleDateString(),
    price: 109700,
  },
  {
    date: new Date(2023, 4, 17).toLocaleDateString(),
    price: 110000,
  },
  {
    date: new Date(2023, 4, 16).toLocaleDateString(),
    price: 111100,
  },
  {
    date: new Date(2023, 4, 15).toLocaleDateString(),
    price: 111000,
  },
  {
    date: new Date(2023, 4, 14).toLocaleDateString(),
    price: 110800,
  },
  {
    date: new Date(2023, 4, 13).toLocaleDateString(),
    price: 110800,
  },
  {
    date: new Date(2023, 4, 12).toLocaleDateString(),
    price: 110800,
  },
  {
    date: new Date(2023, 4, 11).toLocaleDateString(),
    price: 111600,
  },
  {
    date: new Date(2023, 4, 10).toLocaleDateString(),
    price: 111600,
  },
  {
    date: new Date(2023, 4, 9).toLocaleDateString(),
    price: 111200,
  },
  {
    date: new Date(2023, 4, 8).toLocaleDateString(),
    price: 110900,
  },
  {
    date: new Date(2023, 4, 7).toLocaleDateString(),
    price: 110600,
  },
  {
    date: new Date(2023, 4, 6).toLocaleDateString(),
    price: 111800,
  },
  {
    date: new Date(2023, 4, 5).toLocaleDateString(),
    price: 111800,
  },
  {
    date: new Date(2023, 4, 4).toLocaleDateString(),
    price: 111800,
  },
  {
    date: new Date(2023, 4, 3).toLocaleDateString(),
    price: 110600,
  },
  {
    date: new Date(2023, 4, 2).toLocaleDateString(),
    price: 108800,
  },
  {
    date: new Date(2023, 4, 1).toLocaleDateString(),
    price: 109000,
  },
  {
    date: new Date(2023, 3, 30).toLocaleDateString(),
    price: 109200,
  },
  {
    date: new Date(2023, 3, 29).toLocaleDateString(),
    price: 109100,
  },
  {
    date: new Date(2023, 3, 28).toLocaleDateString(),
    price: 109100,
  },
  {
    date: new Date(2023, 3, 27).toLocaleDateString(),
    price: 109600,
  },
  {
    date: new Date(2023, 3, 26).toLocaleDateString(),
    price: 109700,
  },
  {
    date: new Date(2023, 3, 25).toLocaleDateString(),
    price: 109500,
  },
  {
    date: new Date(2023, 3, 24).toLocaleDateString(),
    price: 109100,
  },
  {
    date: new Date(2023, 3, 23).toLocaleDateString(),
    price: 109300,
  },
  {
    date: new Date(2023, 3, 22).toLocaleDateString(),
    price: 110200,
  },
  {
    date: new Date(2023, 3, 21).toLocaleDateString(),
    price: 110200,
  },
  {
    date: new Date(2023, 3, 20).toLocaleDateString(),
    price: 109800,
  },
  {
    date: new Date(2023, 3, 19).toLocaleDateString(),
    price: 110300,
  },
  {
    date: new Date(2023, 3, 18).toLocaleDateString(),
    price: 110000,
  },
  {
    date: new Date(2023, 3, 17).toLocaleDateString(),
    price: 110000,
  },
  {
    date: new Date(2023, 3, 16).toLocaleDateString(),
    price: 110000,
  },
  {
    date: new Date(2023, 3, 15).toLocaleDateString(),
    price: 110800,
  },
  {
    date: new Date(2023, 3, 14).toLocaleDateString(),
    price: 110800,
  },
  {
    date: new Date(2023, 3, 13).toLocaleDateString(),
    price: 110800,
  },
  {
    date: new Date(2023, 3, 12).toLocaleDateString(),
    price: 110800,
  },
  {
    date: new Date(2023, 3, 11).toLocaleDateString(),
    price: 109800,
  },
  {
    date: new Date(2023, 3, 10).toLocaleDateString(),
    price: 109300,
  },
  {
    date: new Date(2023, 3, 9).toLocaleDateString(),
    price: 110000,
  },
  {
    date: new Date(2023, 3, 8).toLocaleDateString(),
    price: 110000,
  },
  {
    date: new Date(2023, 3, 7).toLocaleDateString(),
    price: 110000,
  },
  {
    date: new Date(2023, 3, 6).toLocaleDateString(),
    price: 110200,
  },
  {
    date: new Date(2023, 3, 5).toLocaleDateString(),
    price: 111000,
  },
  {
    date: new Date(2023, 3, 4).toLocaleDateString(),
    price: 109000,
  },
  {
    date: new Date(2023, 3, 3).toLocaleDateString(),
    price: 108000,
  },
  {
    date: new Date(2023, 3, 2).toLocaleDateString(),
    price: 108600,
  },
  {
    date: new Date(2023, 3, 1).toLocaleDateString(),
    price: 109200,
  },
  {
    date: new Date(2023, 2, 31).toLocaleDateString(),
    price: 109200,
  },
  {
    date: new Date(2023, 2, 30).toLocaleDateString(),
    price: 108200,
  },
  {
    date: new Date(2023, 2, 29).toLocaleDateString(),
    price: 108500,
  },
  {
    date: new Date(2023, 2, 28).toLocaleDateString(),
    price: 108000,
  },
  {
    date: new Date(2023, 2, 27).toLocaleDateString(),
    price: 109000,
  },
  {
    date: new Date(2023, 2, 26).toLocaleDateString(),
    price: 109200,
  },
  {
    date: new Date(2023, 2, 25).toLocaleDateString(),
    price: 109800,
  },
  {
    date: new Date(2023, 2, 24).toLocaleDateString(),
    price: 109800,
  },
  {
    date: new Date(2023, 2, 23).toLocaleDateString(),
    price: 109000,
  },
  {
    date: new Date(2023, 2, 22).toLocaleDateString(),
    price: 107800,
  },
  {
    date: new Date(2023, 2, 21).toLocaleDateString(),
    price: 109800,
  },
  {
    date: new Date(2023, 2, 20).toLocaleDateString(),
    price: 109300,
  },
  {
    date: new Date(2023, 2, 19).toLocaleDateString(),
    price: 110000,
  },
  {
    date: new Date(2023, 2, 18).toLocaleDateString(),
    price: 107100,
  },
  {
    date: new Date(2023, 2, 17).toLocaleDateString(),
    price: 107100,
  },
  {
    date: new Date(2023, 2, 16).toLocaleDateString(),
    price: 106700,
  },
  {
    date: new Date(2023, 2, 15).toLocaleDateString(),
    price: 105700,
  },
  {
    date: new Date(2023, 2, 14).toLocaleDateString(),
    price: 105700,
  },
  {
    date: new Date(2023, 2, 13).toLocaleDateString(),
    price: 104100,
  },
  {
    date: new Date(2023, 2, 12).toLocaleDateString(),
    price: 103500,
  },
  {
    date: new Date(2023, 2, 11).toLocaleDateString(),
    price: 101800,
  },
  {
    date: new Date(2023, 2, 10).toLocaleDateString(),
    price: 101800,
  },
  {
    date: new Date(2023, 2, 9).toLocaleDateString(),
    price: 101000,
  },
  {
    date: new Date(2023, 2, 8).toLocaleDateString(),
    price: 101500,
  },
  {
    date: new Date(2023, 2, 7).toLocaleDateString(),
    price: 102500,
  },
  {
    date: new Date(2023, 2, 6).toLocaleDateString(),
    price: 102800,
  },
  {
    date: new Date(2023, 2, 5).toLocaleDateString(),
    price: 102800,
  },
  {
    date: new Date(2023, 2, 4).toLocaleDateString(),
    price: 102500,
  },
  {
    date: new Date(2023, 2, 3).toLocaleDateString(),
    price: 102500,
  },
  {
    date: new Date(2023, 2, 2).toLocaleDateString(),
    price: 102600,
  },
  {
    date: new Date(2023, 2, 1).toLocaleDateString(),
    price: 102300,
  },
  {
    date: new Date(2023, 1, 28).toLocaleDateString(),
    price: 101800,
  },
  {
    date: new Date(2023, 1, 27).toLocaleDateString(),
    price: 101800,
  },
  {
    date: new Date(2023, 1, 26).toLocaleDateString(),
    price: 102000,
  },
  {
    date: new Date(2023, 1, 25).toLocaleDateString(),
    price: 102400,
  },
  {
    date: new Date(2023, 1, 24).toLocaleDateString(),
    price: 102400,
  },
  {
    date: new Date(2023, 1, 23).toLocaleDateString(),
    price: 102500,
  },
  {
    date: new Date(2023, 1, 22).toLocaleDateString(),
    price: 103000,
  },
  {
    date: new Date(2023, 1, 21).toLocaleDateString(),
    price: 103000,
  },
  {
    date: new Date(2023, 1, 20).toLocaleDateString(),
    price: 103200,
  },
  {
    date: new Date(2023, 1, 19).toLocaleDateString(),
    price: 103200,
  },
  {
    date: new Date(2023, 1, 18).toLocaleDateString(),
    price: 102500,
  },
  {
    date: new Date(2023, 1, 17).toLocaleDateString(),
    price: 102500,
  },
  {
    date: new Date(2023, 1, 16).toLocaleDateString(),
    price: 103000,
  },
  {
    date: new Date(2023, 1, 15).toLocaleDateString(),
    price: 103600,
  },
  {
    date: new Date(2023, 1, 14).toLocaleDateString(),
    price: 103800,
  },
  {
    date: new Date(2023, 1, 13).toLocaleDateString(),
    price: 104000,
  },
  {
    date: new Date(2023, 1, 12).toLocaleDateString(),
    price: 104000,
  },
  {
    date: new Date(2023, 1, 11).toLocaleDateString(),
    price: 103600,
  },
  {
    date: new Date(2023, 1, 10).toLocaleDateString(),
    price: 103600,
  },
  {
    date: new Date(2023, 1, 9).toLocaleDateString(),
    price: 104900,
  },
  {
    date: new Date(2023, 1, 8).toLocaleDateString(),
    price: 104800,
  },
  {
    date: new Date(2023, 1, 7).toLocaleDateString(),
    price: 104600,
  },
  {
    date: new Date(2023, 1, 6).toLocaleDateString(),
    price: 104600,
  },
  {
    date: new Date(2023, 1, 5).toLocaleDateString(),
    price: 104100,
  },
  {
    date: new Date(2023, 1, 4).toLocaleDateString(),
    price: 106100,
  },
  {
    date: new Date(2023, 1, 3).toLocaleDateString(),
    price: 106100,
  },
  {
    date: new Date(2023, 1, 2).toLocaleDateString(),
    price: 107500,
  },
  {
    date: new Date(2023, 1, 1).toLocaleDateString(),
    price: 106300,
  },
  {
    date: new Date(2023, 0, 31).toLocaleDateString(),
    price: 105800,
  },
  {
    date: new Date(2023, 0, 30).toLocaleDateString(),
    price: 106300,
  },
  {
    date: new Date(2023, 0, 29).toLocaleDateString(),
    price: 106000,
  },
  {
    date: new Date(2023, 0, 28).toLocaleDateString(),
    price: 105800,
  },
  {
    date: new Date(2023, 0, 27).toLocaleDateString(),
    price: 105800,
  },
  {
    date: new Date(2023, 0, 26).toLocaleDateString(),
    price: 106900,
  },
  {
    date: new Date(2023, 0, 25).toLocaleDateString(),
    price: 106200,
  },
  {
    date: new Date(2023, 0, 24).toLocaleDateString(),
    price: 106300,
  },
  {
    date: new Date(2023, 0, 23).toLocaleDateString(),
    price: 105300,
  },
  {
    date: new Date(2023, 0, 22).toLocaleDateString(),
    price: 105000,
  },
  {
    date: new Date(2023, 0, 21).toLocaleDateString(),
    price: 105200,
  },
  {
    date: new Date(2023, 0, 20).toLocaleDateString(),
    price: 105200,
  },
  {
    date: new Date(2023, 0, 19).toLocaleDateString(),
    price: 104500,
  },
  {
    date: new Date(2023, 0, 18).toLocaleDateString(),
    price: 104500,
  },
  {
    date: new Date(2023, 0, 17).toLocaleDateString(),
    price: 105100,
  },
  {
    date: new Date(2023, 0, 16).toLocaleDateString(),
    price: 105200,
  },
  {
    date: new Date(2023, 0, 15).toLocaleDateString(),
    price: 105000,
  },
  {
    date: new Date(2023, 0, 14).toLocaleDateString(),
    price: 103900,
  },
  {
    date: new Date(2023, 0, 13).toLocaleDateString(),
    price: 103900,
  },
  {
    date: new Date(2023, 0, 12).toLocaleDateString(),
    price: 103400,
  },
  {
    date: new Date(2023, 0, 11).toLocaleDateString(),
    price: 103200,
  },
  {
    date: new Date(2023, 0, 10).toLocaleDateString(),
    price: 103500,
  },
  {
    date: new Date(2023, 0, 9).toLocaleDateString(),
    price: 103900,
  },
  {
    date: new Date(2023, 0, 8).toLocaleDateString(),
    price: 103300,
  },
  {
    date: new Date(2023, 0, 7).toLocaleDateString(),
    price: 102300,
  },
  {
    date: new Date(2023, 0, 6).toLocaleDateString(),
    price: 102300,
  },
  {
    date: new Date(2023, 0, 5).toLocaleDateString(),
    price: 103100,
  },
  {
    date: new Date(2023, 0, 4).toLocaleDateString(),
    price: 102900,
  },
  {
    date: new Date(2023, 0, 3).toLocaleDateString(),
    price: 102600,
  },
  {
    date: new Date(2023, 0, 2).toLocaleDateString(),
    price: 101700,
  },
  {
    date: new Date(2023, 0, 1).toLocaleDateString(),
    price: 101700,
  },
  {
    date: new Date(2022, 11, 31).toLocaleDateString(),
    price: 101400,
  },
  {
    date: new Date(2022, 11, 30).toLocaleDateString(),
    price: 101400,
  },
  {
    date: new Date(2022, 11, 29).toLocaleDateString(),
    price: 100900,
  },
  {
    date: new Date(2022, 11, 28).toLocaleDateString(),
    price: 101100,
  },
  {
    date: new Date(2022, 11, 27).toLocaleDateString(),
    price: 100700,
  },
  {
    date: new Date(2022, 11, 26).toLocaleDateString(),
    price: 100500,
  },
  {
    date: new Date(2022, 11, 25).toLocaleDateString(),
    price: 100500,
  },
  {
    date: new Date(2022, 11, 24).toLocaleDateString(),
    price: 100300,
  },
  {
    date: new Date(2022, 11, 23).toLocaleDateString(),
    price: 100300,
  },
  {
    date: new Date(2022, 11, 22).toLocaleDateString(),
    price: 101500,
  },
  {
    date: new Date(2022, 11, 21).toLocaleDateString(),
    price: 101200,
  },
  {
    date: new Date(2022, 11, 20).toLocaleDateString(),
    price: 100400,
  },
  {
    date: new Date(2022, 11, 19).toLocaleDateString(),
    price: 100500,
  },
  {
    date: new Date(2022, 11, 18).toLocaleDateString(),
    price: 100500,
  },
  {
    date: new Date(2022, 11, 17).toLocaleDateString(),
    price: 99900,
  },
  {
    date: new Date(2022, 11, 16).toLocaleDateString(),
    price: 99900,
  },
  {
    date: new Date(2022, 11, 15).toLocaleDateString(),
    price: 100300,
  },
  {
    date: new Date(2022, 11, 14).toLocaleDateString(),
    price: 101000,
  },
  {
    date: new Date(2022, 11, 13).toLocaleDateString(),
    price: 100000,
  },
  {
    date: new Date(2022, 11, 12).toLocaleDateString(),
    price: 100200,
  },
  {
    date: new Date(2022, 11, 11).toLocaleDateString(),
    price: 100500,
  },
  {
    date: new Date(2022, 11, 10).toLocaleDateString(),
    price: 100300,
  },
  {
    date: new Date(2022, 11, 9).toLocaleDateString(),
    price: 100300,
  },
  {
    date: new Date(2022, 11, 8).toLocaleDateString(),
    price: 99700,
  },
  {
    date: new Date(2022, 11, 7).toLocaleDateString(),
    price: 99300,
  },
  {
    date: new Date(2022, 11, 6).toLocaleDateString(),
    price: 99300,
  },
  {
    date: new Date(2022, 11, 5).toLocaleDateString(),
    price: 99900,
  },
  {
    date: new Date(2022, 11, 4).toLocaleDateString(),
    price: 99500,
  },
  {
    date: new Date(2022, 11, 3).toLocaleDateString(),
    price: 99100,
  },
  {
    date: new Date(2022, 11, 2).toLocaleDateString(),
    price: 99100,
  },
  {
    date: new Date(2022, 11, 1).toLocaleDateString(),
    price: 98100,
  },
  {
    date: new Date(2022, 10, 30).toLocaleDateString(),
    price: 97600,
  },
  {
    date: new Date(2022, 10, 29).toLocaleDateString(),
    price: 97400,
  },
  {
    date: new Date(2022, 10, 28).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2022, 10, 27).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2022, 10, 26).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2022, 10, 25).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2022, 10, 24).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2022, 10, 23).toLocaleDateString(),
    price: 96800,
  },
  {
    date: new Date(2022, 10, 22).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2022, 10, 21).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2022, 10, 20).toLocaleDateString(),
    price: 98100,
  },
  {
    date: new Date(2022, 10, 19).toLocaleDateString(),
    price: 98100,
  },
  {
    date: new Date(2022, 10, 18).toLocaleDateString(),
    price: 98100,
  },
  {
    date: new Date(2022, 10, 17).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 10, 16).toLocaleDateString(),
    price: 98400,
  },
  {
    date: new Date(2022, 10, 15).toLocaleDateString(),
    price: 98200,
  },
  {
    date: new Date(2022, 10, 14).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2022, 10, 13).toLocaleDateString(),
    price: 97300,
  },
  {
    date: new Date(2022, 10, 12).toLocaleDateString(),
    price: 96700,
  },
  {
    date: new Date(2022, 10, 11).toLocaleDateString(),
    price: 96700,
  },
  {
    date: new Date(2022, 10, 10).toLocaleDateString(),
    price: 95400,
  },
  {
    date: new Date(2022, 10, 9).toLocaleDateString(),
    price: 95400,
  },
  {
    date: new Date(2022, 10, 8).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 10, 7).toLocaleDateString(),
    price: 94300,
  },
  {
    date: new Date(2022, 10, 6).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2022, 10, 5).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2022, 10, 4).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2022, 10, 3).toLocaleDateString(),
    price: 93200,
  },
  {
    date: new Date(2022, 10, 2).toLocaleDateString(),
    price: 93600,
  },
  {
    date: new Date(2022, 10, 1).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2022, 9, 31).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 9, 30).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 9, 29).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 9, 28).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 9, 27).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 9, 26).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 9, 25).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 9, 24).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 9, 23).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 9, 22).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 9, 21).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2022, 9, 20).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2022, 9, 19).toLocaleDateString(),
    price: 93200,
  },
  {
    date: new Date(2022, 9, 18).toLocaleDateString(),
    price: 93400,
  },
  {
    date: new Date(2022, 9, 17).toLocaleDateString(),
    price: 93300,
  },
  {
    date: new Date(2022, 9, 16).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2022, 9, 15).toLocaleDateString(),
    price: 94100,
  },
  {
    date: new Date(2022, 9, 14).toLocaleDateString(),
    price: 94100,
  },
  {
    date: new Date(2022, 9, 13).toLocaleDateString(),
    price: 94200,
  },
  {
    date: new Date(2022, 9, 12).toLocaleDateString(),
    price: 94200,
  },
  {
    date: new Date(2022, 9, 11).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 9, 10).toLocaleDateString(),
    price: 95200,
  },
  {
    date: new Date(2022, 9, 9).toLocaleDateString(),
    price: 96000,
  },
  {
    date: new Date(2022, 9, 8).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 9, 7).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 9, 6).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 9, 5).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 9, 4).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 9, 3).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 9, 2).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 9, 1).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 8, 30).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 8, 29).toLocaleDateString(),
    price: 92800,
  },
  {
    date: new Date(2022, 8, 28).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2022, 8, 27).toLocaleDateString(),
    price: 91400,
  },
  {
    date: new Date(2022, 8, 26).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2022, 8, 25).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2022, 8, 24).toLocaleDateString(),
    price: 92800,
  },
  {
    date: new Date(2022, 8, 23).toLocaleDateString(),
    price: 92800,
  },
  {
    date: new Date(2022, 8, 22).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2022, 8, 21).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2022, 8, 20).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2022, 8, 19).toLocaleDateString(),
    price: 91400,
  },
  {
    date: new Date(2022, 8, 18).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2022, 8, 17).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2022, 8, 16).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2022, 8, 15).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2022, 8, 14).toLocaleDateString(),
    price: 92800,
  },
  {
    date: new Date(2022, 8, 13).toLocaleDateString(),
    price: 93500,
  },
  {
    date: new Date(2022, 8, 12).toLocaleDateString(),
    price: 93600,
  },
  {
    date: new Date(2022, 8, 11).toLocaleDateString(),
    price: 93900,
  },
  {
    date: new Date(2022, 8, 10).toLocaleDateString(),
    price: 93900,
  },
  {
    date: new Date(2022, 8, 9).toLocaleDateString(),
    price: 93900,
  },
  {
    date: new Date(2022, 8, 8).toLocaleDateString(),
    price: 93800,
  },
  {
    date: new Date(2022, 8, 7).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 8, 6).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 8, 5).toLocaleDateString(),
    price: 93700,
  },
  {
    date: new Date(2022, 8, 4).toLocaleDateString(),
    price: 93600,
  },
  {
    date: new Date(2022, 8, 3).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 8, 2).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 8, 1).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2022, 7, 31).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 7, 30).toLocaleDateString(),
    price: 94800,
  },
  {
    date: new Date(2022, 7, 29).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2022, 7, 28).toLocaleDateString(),
    price: 95100,
  },
  {
    date: new Date(2022, 7, 27).toLocaleDateString(),
    price: 95800,
  },
  {
    date: new Date(2022, 7, 26).toLocaleDateString(),
    price: 95800,
  },
  {
    date: new Date(2022, 7, 25).toLocaleDateString(),
    price: 95800,
  },
  {
    date: new Date(2022, 7, 24).toLocaleDateString(),
    price: 95300,
  },
  {
    date: new Date(2022, 7, 23).toLocaleDateString(),
    price: 95000,
  },
  {
    date: new Date(2022, 7, 22).toLocaleDateString(),
    price: 95300,
  },
  {
    date: new Date(2022, 7, 21).toLocaleDateString(),
    price: 95500,
  },
  {
    date: new Date(2022, 7, 20).toLocaleDateString(),
    price: 95500,
  },
  {
    date: new Date(2022, 7, 19).toLocaleDateString(),
    price: 95500,
  },
  {
    date: new Date(2022, 7, 18).toLocaleDateString(),
    price: 95900,
  },
  {
    date: new Date(2022, 7, 17).toLocaleDateString(),
    price: 96200,
  },
  {
    date: new Date(2022, 7, 16).toLocaleDateString(),
    price: 96700,
  },
  {
    date: new Date(2022, 7, 15).toLocaleDateString(),
    price: 97400,
  },
  {
    date: new Date(2022, 7, 14).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2022, 7, 13).toLocaleDateString(),
    price: 97300,
  },
  {
    date: new Date(2022, 7, 12).toLocaleDateString(),
    price: 97300,
  },
  {
    date: new Date(2022, 7, 11).toLocaleDateString(),
    price: 96600,
  },
  {
    date: new Date(2022, 7, 10).toLocaleDateString(),
    price: 97100,
  },
  {
    date: new Date(2022, 7, 9).toLocaleDateString(),
    price: 96900,
  },
  {
    date: new Date(2022, 7, 8).toLocaleDateString(),
    price: 96300,
  },
  {
    date: new Date(2022, 7, 7).toLocaleDateString(),
    price: 96300,
  },
  {
    date: new Date(2022, 7, 6).toLocaleDateString(),
    price: 96800,
  },
  {
    date: new Date(2022, 7, 5).toLocaleDateString(),
    price: 96800,
  },
  {
    date: new Date(2022, 7, 4).toLocaleDateString(),
    price: 96100,
  },
  {
    date: new Date(2022, 7, 3).toLocaleDateString(),
    price: 95300,
  },
  {
    date: new Date(2022, 7, 2).toLocaleDateString(),
    price: 95600,
  },
  {
    date: new Date(2022, 7, 1).toLocaleDateString(),
    price: 95400,
  },
  {
    date: new Date(2022, 6, 31).toLocaleDateString(),
    price: 95800,
  },
  {
    date: new Date(2022, 6, 30).toLocaleDateString(),
    price: 95600,
  },
  {
    date: new Date(2022, 6, 29).toLocaleDateString(),
    price: 95600,
  },
  {
    date: new Date(2022, 6, 28).toLocaleDateString(),
    price: 94800,
  },
  {
    date: new Date(2022, 6, 27).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 6, 26).toLocaleDateString(),
    price: 94200,
  },
  {
    date: new Date(2022, 6, 25).toLocaleDateString(),
    price: 94400,
  },
  {
    date: new Date(2022, 6, 24).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2022, 6, 23).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 6, 22).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 6, 21).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2022, 6, 20).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 6, 19).toLocaleDateString(),
    price: 93800,
  },
  {
    date: new Date(2022, 6, 18).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 6, 17).toLocaleDateString(),
    price: 93600,
  },
  {
    date: new Date(2022, 6, 16).toLocaleDateString(),
    price: 93800,
  },
  {
    date: new Date(2022, 6, 15).toLocaleDateString(),
    price: 93800,
  },
  {
    date: new Date(2022, 6, 14).toLocaleDateString(),
    price: 94600,
  },
  {
    date: new Date(2022, 6, 13).toLocaleDateString(),
    price: 94300,
  },
  {
    date: new Date(2022, 6, 12).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2022, 6, 11).toLocaleDateString(),
    price: 94700,
  },
  {
    date: new Date(2022, 6, 10).toLocaleDateString(),
    price: 94800,
  },
  {
    date: new Date(2022, 6, 9).toLocaleDateString(),
    price: 94600,
  },
  {
    date: new Date(2022, 6, 8).toLocaleDateString(),
    price: 94600,
  },
  {
    date: new Date(2022, 6, 7).toLocaleDateString(),
    price: 94600,
  },
  {
    date: new Date(2022, 6, 6).toLocaleDateString(),
    price: 96000,
  },
  {
    date: new Date(2022, 6, 5).toLocaleDateString(),
    price: 97600,
  },
  {
    date: new Date(2022, 6, 4).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2022, 6, 3).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2022, 6, 2).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2022, 6, 1).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2022, 5, 30).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2022, 5, 29).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2022, 5, 28).toLocaleDateString(),
    price: 97700,
  },
  {
    date: new Date(2022, 5, 27).toLocaleDateString(),
    price: 97700,
  },
  {
    date: new Date(2022, 5, 26).toLocaleDateString(),
    price: 97300,
  },
  {
    date: new Date(2022, 5, 25).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2022, 5, 24).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2022, 5, 23).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2022, 5, 22).toLocaleDateString(),
    price: 97300,
  },
  {
    date: new Date(2022, 5, 21).toLocaleDateString(),
    price: 97700,
  },
  {
    date: new Date(2022, 5, 20).toLocaleDateString(),
    price: 97700,
  },
  {
    date: new Date(2022, 5, 19).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2022, 5, 18).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2022, 5, 17).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2022, 5, 16).toLocaleDateString(),
    price: 97300,
  },
  {
    date: new Date(2022, 5, 15).toLocaleDateString(),
    price: 96500,
  },
  {
    date: new Date(2022, 5, 14).toLocaleDateString(),
    price: 97100,
  },
  {
    date: new Date(2022, 5, 13).toLocaleDateString(),
    price: 98900,
  },
  {
    date: new Date(2022, 5, 12).toLocaleDateString(),
    price: 99200,
  },
  {
    date: new Date(2022, 5, 11).toLocaleDateString(),
    price: 97700,
  },
  {
    date: new Date(2022, 5, 10).toLocaleDateString(),
    price: 97700,
  },
  {
    date: new Date(2022, 5, 9).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 5, 8).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2022, 5, 7).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2022, 5, 6).toLocaleDateString(),
    price: 98100,
  },
  {
    date: new Date(2022, 5, 5).toLocaleDateString(),
    price: 97900,
  },
  {
    date: new Date(2022, 5, 4).toLocaleDateString(),
    price: 98500,
  },
  {
    date: new Date(2022, 5, 3).toLocaleDateString(),
    price: 98500,
  },
  {
    date: new Date(2022, 5, 2).toLocaleDateString(),
    price: 97600,
  },
  {
    date: new Date(2022, 5, 1).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2022, 4, 31).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 4, 30).toLocaleDateString(),
    price: 98200,
  },
  {
    date: new Date(2022, 4, 29).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 4, 28).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 4, 27).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 4, 26).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2022, 4, 25).toLocaleDateString(),
    price: 98200,
  },
  {
    date: new Date(2022, 4, 24).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 4, 23).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 4, 22).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 4, 21).toLocaleDateString(),
    price: 97300,
  },
  {
    date: new Date(2022, 4, 20).toLocaleDateString(),
    price: 97300,
  },
  {
    date: new Date(2022, 4, 19).toLocaleDateString(),
    price: 96300,
  },
  {
    date: new Date(2022, 4, 18).toLocaleDateString(),
    price: 95800,
  },
  {
    date: new Date(2022, 4, 17).toLocaleDateString(),
    price: 96700,
  },
  {
    date: new Date(2022, 4, 16).toLocaleDateString(),
    price: 96500,
  },
  {
    date: new Date(2022, 4, 15).toLocaleDateString(),
    price: 96500,
  },
  {
    date: new Date(2022, 4, 14).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2022, 4, 13).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2022, 4, 12).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2022, 4, 11).toLocaleDateString(),
    price: 97000,
  },
  {
    date: new Date(2022, 4, 10).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 4, 9).toLocaleDateString(),
    price: 98700,
  },
  {
    date: new Date(2022, 4, 8).toLocaleDateString(),
    price: 98600,
  },
  {
    date: new Date(2022, 4, 7).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 4, 6).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 4, 5).toLocaleDateString(),
    price: 98600,
  },
  {
    date: new Date(2022, 4, 4).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2022, 4, 3).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2022, 4, 2).toLocaleDateString(),
    price: 98200,
  },
  {
    date: new Date(2022, 4, 1).toLocaleDateString(),
    price: 99000,
  },
  {
    date: new Date(2022, 3, 30).toLocaleDateString(),
    price: 99200,
  },
  {
    date: new Date(2022, 3, 29).toLocaleDateString(),
    price: 99200,
  },
  {
    date: new Date(2022, 3, 28).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 3, 27).toLocaleDateString(),
    price: 99000,
  },
  {
    date: new Date(2022, 3, 26).toLocaleDateString(),
    price: 99300,
  },
  {
    date: new Date(2022, 3, 25).toLocaleDateString(),
    price: 100200,
  },
  {
    date: new Date(2022, 3, 24).toLocaleDateString(),
    price: 100500,
  },
  {
    date: new Date(2022, 3, 23).toLocaleDateString(),
    price: 100900,
  },
  {
    date: new Date(2022, 3, 22).toLocaleDateString(),
    price: 100900,
  },
  {
    date: new Date(2022, 3, 21).toLocaleDateString(),
    price: 100900,
  },
  {
    date: new Date(2022, 3, 20).toLocaleDateString(),
    price: 100600,
  },
  {
    date: new Date(2022, 3, 19).toLocaleDateString(),
    price: 102100,
  },
  {
    date: new Date(2022, 3, 18).toLocaleDateString(),
    price: 102500,
  },
  {
    date: new Date(2022, 3, 17).toLocaleDateString(),
    price: 102000,
  },
  {
    date: new Date(2022, 3, 16).toLocaleDateString(),
    price: 102000,
  },
  {
    date: new Date(2022, 3, 15).toLocaleDateString(),
    price: 102000,
  },
  {
    date: new Date(2022, 3, 14).toLocaleDateString(),
    price: 101500,
  },
  {
    date: new Date(2022, 3, 13).toLocaleDateString(),
    price: 101500,
  },
  {
    date: new Date(2022, 3, 12).toLocaleDateString(),
    price: 100900,
  },
  {
    date: new Date(2022, 3, 11).toLocaleDateString(),
    price: 100100,
  },
  {
    date: new Date(2022, 3, 10).toLocaleDateString(),
    price: 100300,
  },
  {
    date: new Date(2022, 3, 9).toLocaleDateString(),
    price: 99500,
  },
  {
    date: new Date(2022, 3, 8).toLocaleDateString(),
    price: 99500,
  },
  {
    date: new Date(2022, 3, 7).toLocaleDateString(),
    price: 99000,
  },
  {
    date: new Date(2022, 3, 6).toLocaleDateString(),
    price: 98500,
  },
  {
    date: new Date(2022, 3, 5).toLocaleDateString(),
    price: 98800,
  },
  {
    date: new Date(2022, 3, 4).toLocaleDateString(),
    price: 98700,
  },
  {
    date: new Date(2022, 3, 3).toLocaleDateString(),
    price: 99300,
  },
  {
    date: new Date(2022, 3, 2).toLocaleDateString(),
    price: 99700,
  },
  {
    date: new Date(2022, 3, 1).toLocaleDateString(),
    price: 99700,
  },
  {
    date: new Date(2022, 2, 31).toLocaleDateString(),
    price: 98900,
  },
  {
    date: new Date(2022, 2, 30).toLocaleDateString(),
    price: 98800,
  },
  {
    date: new Date(2022, 2, 29).toLocaleDateString(),
    price: 99200,
  },
  {
    date: new Date(2022, 2, 28).toLocaleDateString(),
    price: 100900,
  },
  {
    date: new Date(2022, 2, 27).toLocaleDateString(),
    price: 100900,
  },
  {
    date: new Date(2022, 2, 26).toLocaleDateString(),
    price: 100900,
  },
  {
    date: new Date(2022, 2, 25).toLocaleDateString(),
    price: 100900,
  },
  {
    date: new Date(2022, 2, 24).toLocaleDateString(),
    price: 100300,
  },
  {
    date: new Date(2022, 2, 23).toLocaleDateString(),
    price: 99200,
  },
  {
    date: new Date(2022, 2, 22).toLocaleDateString(),
    price: 100300,
  },
  {
    date: new Date(2022, 2, 21).toLocaleDateString(),
    price: 99500,
  },
  {
    date: new Date(2022, 2, 20).toLocaleDateString(),
    price: 99200,
  },
  {
    date: new Date(2022, 2, 19).toLocaleDateString(),
    price: 99800,
  },
  {
    date: new Date(2022, 2, 18).toLocaleDateString(),
    price: 99800,
  },
  {
    date: new Date(2022, 2, 17).toLocaleDateString(),
    price: 99800,
  },
  {
    date: new Date(2022, 2, 16).toLocaleDateString(),
    price: 99300,
  },
  {
    date: new Date(2022, 2, 15).toLocaleDateString(),
    price: 100500,
  },
  {
    date: new Date(2022, 2, 14).toLocaleDateString(),
    price: 102300,
  },
  {
    date: new Date(2022, 2, 13).toLocaleDateString(),
    price: 102800,
  },
  {
    date: new Date(2022, 2, 12).toLocaleDateString(),
    price: 102600,
  },
  {
    date: new Date(2022, 2, 11).toLocaleDateString(),
    price: 102600,
  },
  {
    date: new Date(2022, 2, 10).toLocaleDateString(),
    price: 102000,
  },
  {
    date: new Date(2022, 2, 9).toLocaleDateString(),
    price: 105500,
  },
  {
    date: new Date(2022, 2, 8).toLocaleDateString(),
    price: 103000,
  },
  {
    date: new Date(2022, 2, 7).toLocaleDateString(),
    price: 103000,
  },
  {
    date: new Date(2022, 2, 6).toLocaleDateString(),
    price: 101900,
  },
  {
    date: new Date(2022, 2, 5).toLocaleDateString(),
    price: 99900,
  },
  {
    date: new Date(2022, 2, 4).toLocaleDateString(),
    price: 99900,
  },
  {
    date: new Date(2022, 2, 3).toLocaleDateString(),
    price: 99000,
  },
  {
    date: new Date(2022, 2, 2).toLocaleDateString(),
    price: 99500,
  },
  {
    date: new Date(2022, 2, 1).toLocaleDateString(),
    price: 97600,
  },
  {
    date: new Date(2022, 1, 28).toLocaleDateString(),
    price: 98200,
  },
  {
    date: new Date(2022, 1, 27).toLocaleDateString(),
    price: 96600,
  },
  {
    date: new Date(2022, 1, 26).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 1, 25).toLocaleDateString(),
    price: 98000,
  },
  {
    date: new Date(2022, 1, 24).toLocaleDateString(),
    price: 99000,
  },
  {
    date: new Date(2022, 1, 23).toLocaleDateString(),
    price: 96500,
  },
  {
    date: new Date(2022, 1, 22).toLocaleDateString(),
    price: 97000,
  },
  {
    date: new Date(2022, 1, 21).toLocaleDateString(),
    price: 96200,
  },
  {
    date: new Date(2022, 1, 20).toLocaleDateString(),
    price: 96600,
  },
  {
    date: new Date(2022, 1, 19).toLocaleDateString(),
    price: 96500,
  },
  {
    date: new Date(2022, 1, 18).toLocaleDateString(),
    price: 96500,
  },
  {
    date: new Date(2022, 1, 17).toLocaleDateString(),
    price: 96100,
  },
  {
    date: new Date(2022, 1, 16).toLocaleDateString(),
    price: 95100,
  },
  {
    date: new Date(2022, 1, 15).toLocaleDateString(),
    price: 96700,
  },
  {
    date: new Date(2022, 1, 14).toLocaleDateString(),
    price: 95500,
  },
  {
    date: new Date(2022, 1, 13).toLocaleDateString(),
    price: 95500,
  },
  {
    date: new Date(2022, 1, 12).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 1, 11).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 1, 10).toLocaleDateString(),
    price: 93900,
  },
  {
    date: new Date(2022, 1, 9).toLocaleDateString(),
    price: 93400,
  },
  {
    date: new Date(2022, 1, 8).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2022, 1, 7).toLocaleDateString(),
    price: 92600,
  },
  {
    date: new Date(2022, 1, 5).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2022, 1, 4).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2022, 1, 3).toLocaleDateString(),
    price: 92700,
  },
  {
    date: new Date(2022, 1, 2).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2022, 1, 1).toLocaleDateString(),
    price: 91900,
  },
  {
    date: new Date(2022, 0, 31).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2022, 0, 30).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2022, 0, 29).toLocaleDateString(),
    price: 92600,
  },
  {
    date: new Date(2022, 0, 28).toLocaleDateString(),
    price: 92600,
  },
  {
    date: new Date(2022, 0, 27).toLocaleDateString(),
    price: 93500,
  },
  {
    date: new Date(2022, 0, 26).toLocaleDateString(),
    price: 94400,
  },
  {
    date: new Date(2022, 0, 25).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2022, 0, 24).toLocaleDateString(),
    price: 93500,
  },
  {
    date: new Date(2022, 0, 23).toLocaleDateString(),
    price: 93500,
  },
  {
    date: new Date(2022, 0, 22).toLocaleDateString(),
    price: 93800,
  },
  {
    date: new Date(2022, 0, 21).toLocaleDateString(),
    price: 93800,
  },
  {
    date: new Date(2022, 0, 20).toLocaleDateString(),
    price: 93700,
  },
  {
    date: new Date(2022, 0, 19).toLocaleDateString(),
    price: 92700,
  },
  {
    date: new Date(2022, 0, 18).toLocaleDateString(),
    price: 92600,
  },
  {
    date: new Date(2022, 0, 17).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2022, 0, 16).toLocaleDateString(),
    price: 92400,
  },
  {
    date: new Date(2022, 0, 15).toLocaleDateString(),
    price: 92700,
  },
  {
    date: new Date(2022, 0, 14).toLocaleDateString(),
    price: 92700,
  },
  {
    date: new Date(2022, 0, 13).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2022, 0, 12).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2022, 0, 11).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2022, 0, 10).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2022, 0, 9).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2022, 0, 8).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2022, 0, 7).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2022, 0, 6).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2022, 0, 5).toLocaleDateString(),
    price: 92800,
  },
  {
    date: new Date(2022, 0, 4).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2022, 0, 3).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2022, 0, 2).toLocaleDateString(),
    price: 93400,
  },
  {
    date: new Date(2022, 0, 1).toLocaleDateString(),
    price: 92700,
  },
  {
    date: new Date(2021, 11, 31).toLocaleDateString(),
    price: 92700,
  },
  {
    date: new Date(2021, 11, 30).toLocaleDateString(),
    price: 92100,
  },
  {
    date: new Date(2021, 11, 29).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2021, 11, 28).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2021, 11, 27).toLocaleDateString(),
    price: 93200,
  },
  {
    date: new Date(2021, 11, 26).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2021, 11, 25).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2021, 11, 24).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2021, 11, 23).toLocaleDateString(),
    price: 93300,
  },
  {
    date: new Date(2021, 11, 22).toLocaleDateString(),
    price: 92600,
  },
  {
    date: new Date(2021, 11, 21).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2021, 11, 20).toLocaleDateString(),
    price: 93800,
  },
  {
    date: new Date(2021, 11, 19).toLocaleDateString(),
    price: 93600,
  },
  {
    date: new Date(2021, 11, 18).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2021, 11, 17).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2021, 11, 16).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2021, 11, 15).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2021, 11, 14).toLocaleDateString(),
    price: 92800,
  },
  {
    date: new Date(2021, 11, 13).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2021, 11, 12).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2021, 11, 11).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2021, 11, 10).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2021, 11, 9).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2021, 11, 8).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2021, 11, 7).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2021, 11, 6).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 11, 5).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 11, 3).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2021, 11, 2).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2021, 11, 1).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2021, 10, 30).toLocaleDateString(),
    price: 91900,
  },
  {
    date: new Date(2021, 10, 29).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 10, 28).toLocaleDateString(),
    price: 91900,
  },
  {
    date: new Date(2021, 10, 27).toLocaleDateString(),
    price: 91900,
  },
  {
    date: new Date(2021, 10, 26).toLocaleDateString(),
    price: 91900,
  },
  {
    date: new Date(2021, 10, 25).toLocaleDateString(),
    price: 91700,
  },
  {
    date: new Date(2021, 10, 24).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2021, 10, 23).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2021, 10, 22).toLocaleDateString(),
    price: 93900,
  },
  {
    date: new Date(2021, 10, 21).toLocaleDateString(),
    price: 93700,
  },
  {
    date: new Date(2021, 10, 20).toLocaleDateString(),
    price: 94400,
  },
  {
    date: new Date(2021, 10, 19).toLocaleDateString(),
    price: 94400,
  },
  {
    date: new Date(2021, 10, 18).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2021, 10, 17).toLocaleDateString(),
    price: 94300,
  },
  {
    date: new Date(2021, 10, 16).toLocaleDateString(),
    price: 94800,
  },
  {
    date: new Date(2021, 10, 15).toLocaleDateString(),
    price: 94300,
  },
  {
    date: new Date(2021, 10, 14).toLocaleDateString(),
    price: 94600,
  },
  {
    date: new Date(2021, 10, 13).toLocaleDateString(),
    price: 94400,
  },
  {
    date: new Date(2021, 10, 12).toLocaleDateString(),
    price: 94400,
  },
  {
    date: new Date(2021, 10, 11).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2021, 10, 10).toLocaleDateString(),
    price: 92700,
  },
  {
    date: new Date(2021, 10, 9).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2021, 10, 8).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2021, 10, 7).toLocaleDateString(),
    price: 91000,
  },
  {
    date: new Date(2021, 10, 6).toLocaleDateString(),
    price: 91000,
  },
  {
    date: new Date(2021, 10, 5).toLocaleDateString(),
    price: 91000,
  },
  {
    date: new Date(2021, 10, 4).toLocaleDateString(),
    price: 91000,
  },
  {
    date: new Date(2021, 10, 3).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2021, 10, 2).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 10, 1).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2021, 9, 31).toLocaleDateString(),
    price: 91700,
  },
  {
    date: new Date(2021, 9, 30).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 9, 29).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 9, 28).toLocaleDateString(),
    price: 92400,
  },
  {
    date: new Date(2021, 9, 27).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 9, 26).toLocaleDateString(),
    price: 92600,
  },
  {
    date: new Date(2021, 9, 25).toLocaleDateString(),
    price: 92400,
  },
  {
    date: new Date(2021, 9, 24).toLocaleDateString(),
    price: 92100,
  },
  {
    date: new Date(2021, 9, 23).toLocaleDateString(),
    price: 91700,
  },
  {
    date: new Date(2021, 9, 22).toLocaleDateString(),
    price: 91700,
  },
  {
    date: new Date(2021, 9, 21).toLocaleDateString(),
    price: 91700,
  },
  {
    date: new Date(2021, 9, 20).toLocaleDateString(),
    price: 91400,
  },
  {
    date: new Date(2021, 9, 19).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2021, 9, 18).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2021, 9, 16).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 9, 15).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 9, 14).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 9, 13).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 9, 12).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 9, 11).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 9, 10).toLocaleDateString(),
    price: 90700,
  },
  {
    date: new Date(2021, 9, 9).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 9, 8).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 9, 7).toLocaleDateString(),
    price: 90400,
  },
  {
    date: new Date(2021, 9, 6).toLocaleDateString(),
    price: 89900,
  },
  {
    date: new Date(2021, 9, 5).toLocaleDateString(),
    price: 90300,
  },
  {
    date: new Date(2021, 9, 4).toLocaleDateString(),
    price: 89800,
  },
  {
    date: new Date(2021, 9, 3).toLocaleDateString(),
    price: 89800,
  },
  {
    date: new Date(2021, 9, 2).toLocaleDateString(),
    price: 89600,
  },
  {
    date: new Date(2021, 9, 1).toLocaleDateString(),
    price: 89600,
  },
  {
    date: new Date(2021, 8, 30).toLocaleDateString(),
    price: 88700,
  },
  {
    date: new Date(2021, 8, 29).toLocaleDateString(),
    price: 88900,
  },
  {
    date: new Date(2021, 8, 28).toLocaleDateString(),
    price: 89000,
  },
  {
    date: new Date(2021, 8, 27).toLocaleDateString(),
    price: 89300,
  },
  {
    date: new Date(2021, 8, 26).toLocaleDateString(),
    price: 89000,
  },
  {
    date: new Date(2021, 8, 25).toLocaleDateString(),
    price: 89000,
  },
  {
    date: new Date(2021, 8, 24).toLocaleDateString(),
    price: 89000,
  },
  {
    date: new Date(2021, 8, 23).toLocaleDateString(),
    price: 89600,
  },
  {
    date: new Date(2021, 8, 22).toLocaleDateString(),
    price: 90100,
  },
  {
    date: new Date(2021, 8, 21).toLocaleDateString(),
    price: 89200,
  },
  {
    date: new Date(2021, 8, 20).toLocaleDateString(),
    price: 88900,
  },
  {
    date: new Date(2021, 8, 19).toLocaleDateString(),
    price: 89100,
  },
  {
    date: new Date(2021, 8, 18).toLocaleDateString(),
    price: 89100,
  },
  {
    date: new Date(2021, 8, 17).toLocaleDateString(),
    price: 89100,
  },
  {
    date: new Date(2021, 8, 16).toLocaleDateString(),
    price: 90500,
  },
  {
    date: new Date(2021, 8, 15).toLocaleDateString(),
    price: 91200,
  },
  {
    date: new Date(2021, 8, 14).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 8, 13).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 8, 12).toLocaleDateString(),
    price: 90300,
  },
  {
    date: new Date(2021, 8, 11).toLocaleDateString(),
    price: 90700,
  },
  {
    date: new Date(2021, 8, 10).toLocaleDateString(),
    price: 90700,
  },
  {
    date: new Date(2021, 8, 9).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 8, 8).toLocaleDateString(),
    price: 90700,
  },
  {
    date: new Date(2021, 8, 7).toLocaleDateString(),
    price: 91400,
  },
  {
    date: new Date(2021, 8, 6).toLocaleDateString(),
    price: 91400,
  },
  {
    date: new Date(2021, 8, 5).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2021, 8, 4).toLocaleDateString(),
    price: 90900,
  },
  {
    date: new Date(2021, 8, 3).toLocaleDateString(),
    price: 90900,
  },
  {
    date: new Date(2021, 8, 2).toLocaleDateString(),
    price: 90800,
  },
  {
    date: new Date(2021, 8, 1).toLocaleDateString(),
    price: 91000,
  },
  {
    date: new Date(2021, 7, 31).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2021, 7, 30).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2021, 7, 29).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2021, 7, 28).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2021, 7, 27).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2021, 7, 26).toLocaleDateString(),
    price: 91100,
  },
  {
    date: new Date(2021, 7, 25).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2021, 7, 24).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2021, 7, 23).toLocaleDateString(),
    price: 91100,
  },
  {
    date: new Date(2021, 7, 22).toLocaleDateString(),
    price: 90900,
  },
  {
    date: new Date(2021, 7, 21).toLocaleDateString(),
    price: 91200,
  },
  {
    date: new Date(2021, 7, 20).toLocaleDateString(),
    price: 91200,
  },
  {
    date: new Date(2021, 7, 19).toLocaleDateString(),
    price: 90800,
  },
  {
    date: new Date(2021, 7, 18).toLocaleDateString(),
    price: 91000,
  },
  {
    date: new Date(2021, 7, 17).toLocaleDateString(),
    price: 91000,
  },
  {
    date: new Date(2021, 7, 16).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 7, 15).toLocaleDateString(),
    price: 90700,
  },
  {
    date: new Date(2021, 7, 14).toLocaleDateString(),
    price: 89700,
  },
  {
    date: new Date(2021, 7, 13).toLocaleDateString(),
    price: 89700,
  },
  {
    date: new Date(2021, 7, 12).toLocaleDateString(),
    price: 89400,
  },
  {
    date: new Date(2021, 7, 11).toLocaleDateString(),
    price: 88800,
  },
  {
    date: new Date(2021, 7, 10).toLocaleDateString(),
    price: 89200,
  },
  {
    date: new Date(2021, 7, 9).toLocaleDateString(),
    price: 89000,
  },
  {
    date: new Date(2021, 7, 8).toLocaleDateString(),
    price: 90000,
  },
  {
    date: new Date(2021, 7, 7).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2021, 7, 6).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2021, 7, 5).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 7, 4).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 7, 3).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2021, 7, 2).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2021, 7, 1).toLocaleDateString(),
    price: 92400,
  },
  {
    date: new Date(2021, 6, 31).toLocaleDateString(),
    price: 92900,
  },
  {
    date: new Date(2021, 6, 30).toLocaleDateString(),
    price: 92900,
  },
  {
    date: new Date(2021, 6, 29).toLocaleDateString(),
    price: 92400,
  },
  {
    date: new Date(2021, 6, 28).toLocaleDateString(),
    price: 92100,
  },
  {
    date: new Date(2021, 6, 27).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2021, 6, 26).toLocaleDateString(),
    price: 92100,
  },
  {
    date: new Date(2021, 6, 25).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 6, 24).toLocaleDateString(),
    price: 92100,
  },
  {
    date: new Date(2021, 6, 23).toLocaleDateString(),
    price: 92100,
  },
  {
    date: new Date(2021, 6, 22).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2021, 6, 21).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2021, 6, 20).toLocaleDateString(),
    price: 93200,
  },
  {
    date: new Date(2021, 6, 19).toLocaleDateString(),
    price: 92800,
  },
  {
    date: new Date(2021, 6, 18).toLocaleDateString(),
    price: 92600,
  },
  {
    date: new Date(2021, 6, 17).toLocaleDateString(),
    price: 93200,
  },
  {
    date: new Date(2021, 6, 16).toLocaleDateString(),
    price: 93200,
  },
  {
    date: new Date(2021, 6, 15).toLocaleDateString(),
    price: 93200,
  },
  {
    date: new Date(2021, 6, 14).toLocaleDateString(),
    price: 92700,
  },
  {
    date: new Date(2021, 6, 13).toLocaleDateString(),
    price: 92400,
  },
  {
    date: new Date(2021, 6, 12).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2021, 6, 11).toLocaleDateString(),
    price: 92400,
  },
  {
    date: new Date(2021, 6, 10).toLocaleDateString(),
    price: 92400,
  },
  {
    date: new Date(2021, 6, 9).toLocaleDateString(),
    price: 92400,
  },
  {
    date: new Date(2021, 6, 8).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2021, 6, 7).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2021, 6, 6).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2021, 6, 5).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2021, 6, 4).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2021, 6, 3).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2021, 6, 2).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2021, 6, 1).toLocaleDateString(),
    price: 90800,
  },
  {
    date: new Date(2021, 5, 30).toLocaleDateString(),
    price: 90000,
  },
  {
    date: new Date(2021, 5, 28).toLocaleDateString(),
    price: 90700,
  },
  {
    date: new Date(2021, 5, 27).toLocaleDateString(),
    price: 90500,
  },
  {
    date: new Date(2021, 5, 26).toLocaleDateString(),
    price: 90500,
  },
  {
    date: new Date(2021, 5, 25).toLocaleDateString(),
    price: 90500,
  },
  {
    date: new Date(2021, 5, 24).toLocaleDateString(),
    price: 90500,
  },
  {
    date: new Date(2021, 5, 23).toLocaleDateString(),
    price: 90700,
  },
  {
    date: new Date(2021, 5, 22).toLocaleDateString(),
    price: 91000,
  },
  {
    date: new Date(2021, 5, 21).toLocaleDateString(),
    price: 90400,
  },
  {
    date: new Date(2021, 5, 20).toLocaleDateString(),
    price: 90000,
  },
  {
    date: new Date(2021, 5, 19).toLocaleDateString(),
    price: 90800,
  },
  {
    date: new Date(2021, 5, 18).toLocaleDateString(),
    price: 90800,
  },
  {
    date: new Date(2021, 5, 17).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 5, 16).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2021, 5, 15).toLocaleDateString(),
    price: 93200,
  },
  {
    date: new Date(2021, 5, 14).toLocaleDateString(),
    price: 93200,
  },
  {
    date: new Date(2021, 5, 13).toLocaleDateString(),
    price: 93900,
  },
  {
    date: new Date(2021, 5, 12).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2021, 5, 11).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2021, 5, 10).toLocaleDateString(),
    price: 93900,
  },
  {
    date: new Date(2021, 5, 9).toLocaleDateString(),
    price: 94200,
  },
  {
    date: new Date(2021, 5, 8).toLocaleDateString(),
    price: 94100,
  },
  {
    date: new Date(2021, 5, 7).toLocaleDateString(),
    price: 93800,
  },
  {
    date: new Date(2021, 5, 6).toLocaleDateString(),
    price: 94100,
  },
  {
    date: new Date(2021, 5, 5).toLocaleDateString(),
    price: 93400,
  },
  {
    date: new Date(2021, 5, 4).toLocaleDateString(),
    price: 93400,
  },
  {
    date: new Date(2021, 5, 3).toLocaleDateString(),
    price: 94900,
  },
  {
    date: new Date(2021, 5, 2).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2021, 5, 1).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2021, 4, 31).toLocaleDateString(),
    price: 94200,
  },
  {
    date: new Date(2021, 4, 30).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2021, 4, 29).toLocaleDateString(),
    price: 93800,
  },
  {
    date: new Date(2021, 4, 28).toLocaleDateString(),
    price: 93800,
  },
  {
    date: new Date(2021, 4, 27).toLocaleDateString(),
    price: 94200,
  },
  {
    date: new Date(2021, 4, 26).toLocaleDateString(),
    price: 93500,
  },
  {
    date: new Date(2021, 4, 25).toLocaleDateString(),
    price: 93500,
  },
  {
    date: new Date(2021, 4, 24).toLocaleDateString(),
    price: 93700,
  },
  {
    date: new Date(2021, 4, 23).toLocaleDateString(),
    price: 93600,
  },
  {
    date: new Date(2021, 4, 22).toLocaleDateString(),
    price: 93300,
  },
  {
    date: new Date(2021, 4, 21).toLocaleDateString(),
    price: 93300,
  },
  {
    date: new Date(2021, 4, 20).toLocaleDateString(),
    price: 93700,
  },
  {
    date: new Date(2021, 4, 19).toLocaleDateString(),
    price: 93300,
  },
  {
    date: new Date(2021, 4, 18).toLocaleDateString(),
    price: 93400,
  },
  {
    date: new Date(2021, 4, 17).toLocaleDateString(),
    price: 92800,
  },
  {
    date: new Date(2021, 4, 16).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2021, 4, 15).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2021, 4, 14).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2021, 4, 13).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2021, 4, 12).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 4, 11).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2021, 4, 10).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 4, 9).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2021, 4, 8).toLocaleDateString(),
    price: 91700,
  },
  {
    date: new Date(2021, 4, 7).toLocaleDateString(),
    price: 91700,
  },
  {
    date: new Date(2021, 4, 6).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 4, 5).toLocaleDateString(),
    price: 90300,
  },
  {
    date: new Date(2021, 4, 4).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 4, 3).toLocaleDateString(),
    price: 90400,
  },
  {
    date: new Date(2021, 4, 2).toLocaleDateString(),
    price: 90000,
  },
  {
    date: new Date(2021, 4, 1).toLocaleDateString(),
    price: 89900,
  },
  {
    date: new Date(2021, 3, 30).toLocaleDateString(),
    price: 89900,
  },
  {
    date: new Date(2021, 3, 29).toLocaleDateString(),
    price: 90800,
  },
  {
    date: new Date(2021, 3, 28).toLocaleDateString(),
    price: 90500,
  },
  {
    date: new Date(2021, 3, 27).toLocaleDateString(),
    price: 91200,
  },
  {
    date: new Date(2021, 3, 26).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2021, 3, 25).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2021, 3, 24).toLocaleDateString(),
    price: 91700,
  },
  {
    date: new Date(2021, 3, 23).toLocaleDateString(),
    price: 91700,
  },
  {
    date: new Date(2021, 3, 22).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2021, 3, 21).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 3, 20).toLocaleDateString(),
    price: 90700,
  },
  {
    date: new Date(2021, 3, 19).toLocaleDateString(),
    price: 91000,
  },
  {
    date: new Date(2021, 3, 18).toLocaleDateString(),
    price: 90700,
  },
  {
    date: new Date(2021, 3, 17).toLocaleDateString(),
    price: 90500,
  },
  {
    date: new Date(2021, 3, 16).toLocaleDateString(),
    price: 90500,
  },
  {
    date: new Date(2021, 3, 15).toLocaleDateString(),
    price: 89800,
  },
  {
    date: new Date(2021, 3, 14).toLocaleDateString(),
    price: 89500,
  },
  {
    date: new Date(2021, 3, 13).toLocaleDateString(),
    price: 89500,
  },
  {
    date: new Date(2021, 3, 12).toLocaleDateString(),
    price: 89600,
  },
  {
    date: new Date(2021, 3, 11).toLocaleDateString(),
    price: 89500,
  },
  {
    date: new Date(2021, 3, 10).toLocaleDateString(),
    price: 89900,
  },
  {
    date: new Date(2021, 3, 9).toLocaleDateString(),
    price: 89900,
  },
  {
    date: new Date(2021, 3, 8).toLocaleDateString(),
    price: 89000,
  },
  {
    date: new Date(2021, 3, 7).toLocaleDateString(),
    price: 88000,
  },
  {
    date: new Date(2021, 3, 6).toLocaleDateString(),
    price: 87500,
  },
  {
    date: new Date(2021, 3, 5).toLocaleDateString(),
    price: 87200,
  },
  {
    date: new Date(2021, 3, 3).toLocaleDateString(),
    price: 87400,
  },
  {
    date: new Date(2021, 3, 2).toLocaleDateString(),
    price: 87400,
  },
  {
    date: new Date(2021, 3, 1).toLocaleDateString(),
    price: 86500,
  },
  {
    date: new Date(2021, 2, 31).toLocaleDateString(),
    price: 85600,
  },
  {
    date: new Date(2021, 2, 30).toLocaleDateString(),
    price: 86000,
  },
  {
    date: new Date(2021, 2, 28).toLocaleDateString(),
    price: 86300,
  },
  {
    date: new Date(2021, 2, 27).toLocaleDateString(),
    price: 86300,
  },
  {
    date: new Date(2021, 2, 26).toLocaleDateString(),
    price: 86300,
  },
  {
    date: new Date(2021, 2, 25).toLocaleDateString(),
    price: 86900,
  },
  {
    date: new Date(2021, 2, 24).toLocaleDateString(),
    price: 86700,
  },
  {
    date: new Date(2021, 2, 23).toLocaleDateString(),
    price: 86700,
  },
  {
    date: new Date(2021, 2, 22).toLocaleDateString(),
    price: 87000,
  },
  {
    date: new Date(2021, 2, 21).toLocaleDateString(),
    price: 87200,
  },
  {
    date: new Date(2021, 2, 20).toLocaleDateString(),
    price: 86700,
  },
  {
    date: new Date(2021, 2, 19).toLocaleDateString(),
    price: 86700,
  },
  {
    date: new Date(2021, 2, 18).toLocaleDateString(),
    price: 87200,
  },
  {
    date: new Date(2021, 2, 17).toLocaleDateString(),
    price: 86900,
  },
  {
    date: new Date(2021, 2, 16).toLocaleDateString(),
    price: 86600,
  },
  {
    date: new Date(2021, 2, 15).toLocaleDateString(),
    price: 86600,
  },
  {
    date: new Date(2021, 2, 14).toLocaleDateString(),
    price: 86600,
  },
  {
    date: new Date(2021, 2, 13).toLocaleDateString(),
    price: 86200,
  },
  {
    date: new Date(2021, 2, 12).toLocaleDateString(),
    price: 86200,
  },
  {
    date: new Date(2021, 2, 11).toLocaleDateString(),
    price: 86800,
  },
  {
    date: new Date(2021, 2, 10).toLocaleDateString(),
    price: 86200,
  },
  {
    date: new Date(2021, 2, 9).toLocaleDateString(),
    price: 85600,
  },
  {
    date: new Date(2021, 2, 8).toLocaleDateString(),
    price: 86200,
  },
  {
    date: new Date(2021, 2, 7).toLocaleDateString(),
    price: 86100,
  },
  {
    date: new Date(2021, 2, 6).toLocaleDateString(),
    price: 85600,
  },
  {
    date: new Date(2021, 2, 5).toLocaleDateString(),
    price: 85600,
  },
  {
    date: new Date(2021, 2, 4).toLocaleDateString(),
    price: 86500,
  },
  {
    date: new Date(2021, 2, 3).toLocaleDateString(),
    price: 87500,
  },
  {
    date: new Date(2021, 2, 2).toLocaleDateString(),
    price: 87000,
  },
  {
    date: new Date(2021, 2, 1).toLocaleDateString(),
    price: 88700,
  },
  {
    date: new Date(2021, 1, 28).toLocaleDateString(),
    price: 88300,
  },
  {
    date: new Date(2021, 1, 27).toLocaleDateString(),
    price: 88800,
  },
  {
    date: new Date(2021, 1, 26).toLocaleDateString(),
    price: 88800,
  },
  {
    date: new Date(2021, 1, 25).toLocaleDateString(),
    price: 89300,
  },
  {
    date: new Date(2021, 1, 24).toLocaleDateString(),
    price: 89800,
  },
  {
    date: new Date(2021, 1, 23).toLocaleDateString(),
    price: 90100,
  },
  {
    date: new Date(2021, 1, 22).toLocaleDateString(),
    price: 89000,
  },
  {
    date: new Date(2021, 1, 21).toLocaleDateString(),
    price: 89000,
  },
  {
    date: new Date(2021, 1, 20).toLocaleDateString(),
    price: 88200,
  },
  {
    date: new Date(2021, 1, 19).toLocaleDateString(),
    price: 88200,
  },
  {
    date: new Date(2021, 1, 18).toLocaleDateString(),
    price: 89200,
  },
  {
    date: new Date(2021, 1, 17).toLocaleDateString(),
    price: 89800,
  },
  {
    date: new Date(2021, 1, 16).toLocaleDateString(),
    price: 90900,
  },
  {
    date: new Date(2021, 1, 14).toLocaleDateString(),
    price: 90800,
  },
  {
    date: new Date(2021, 1, 13).toLocaleDateString(),
    price: 90900,
  },
  {
    date: new Date(2021, 1, 12).toLocaleDateString(),
    price: 90900,
  },
  {
    date: new Date(2021, 1, 11).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2021, 1, 10).toLocaleDateString(),
    price: 91900,
  },
  {
    date: new Date(2021, 1, 9).toLocaleDateString(),
    price: 91900,
  },
  {
    date: new Date(2021, 1, 8).toLocaleDateString(),
    price: 90400,
  },
  {
    date: new Date(2021, 1, 7).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2021, 1, 6).toLocaleDateString(),
    price: 90000,
  },
  {
    date: new Date(2021, 1, 4).toLocaleDateString(),
    price: 91100,
  },
  {
    date: new Date(2021, 1, 3).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 1, 2).toLocaleDateString(),
    price: 92600,
  },
  {
    date: new Date(2021, 1, 1).toLocaleDateString(),
    price: 92600,
  },
  {
    date: new Date(2021, 0, 31).toLocaleDateString(),
    price: 92100,
  },
  {
    date: new Date(2021, 0, 30).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 0, 29).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 0, 28).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 0, 27).toLocaleDateString(),
    price: 92100,
  },
  {
    date: new Date(2021, 0, 26).toLocaleDateString(),
    price: 92800,
  },
  {
    date: new Date(2021, 0, 25).toLocaleDateString(),
    price: 92400,
  },
  {
    date: new Date(2021, 0, 24).toLocaleDateString(),
    price: 92600,
  },
  {
    date: new Date(2021, 0, 23).toLocaleDateString(),
    price: 92900,
  },
  {
    date: new Date(2021, 0, 22).toLocaleDateString(),
    price: 92900,
  },
  {
    date: new Date(2021, 0, 21).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2021, 0, 20).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2021, 0, 19).toLocaleDateString(),
    price: 92000,
  },
  {
    date: new Date(2021, 0, 18).toLocaleDateString(),
    price: 91600,
  },
  {
    date: new Date(2021, 0, 17).toLocaleDateString(),
    price: 91800,
  },
  {
    date: new Date(2021, 0, 16).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2021, 0, 15).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2021, 0, 14).toLocaleDateString(),
    price: 92100,
  },
  {
    date: new Date(2021, 0, 13).toLocaleDateString(),
    price: 92900,
  },
  {
    date: new Date(2021, 0, 12).toLocaleDateString(),
    price: 92800,
  },
  {
    date: new Date(2021, 0, 11).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2021, 0, 10).toLocaleDateString(),
    price: 93000,
  },
  {
    date: new Date(2021, 0, 9).toLocaleDateString(),
    price: 95300,
  },
  {
    date: new Date(2021, 0, 8).toLocaleDateString(),
    price: 95300,
  },
  {
    date: new Date(2021, 0, 7).toLocaleDateString(),
    price: 95400,
  },
  {
    date: new Date(2021, 0, 5).toLocaleDateString(),
    price: 96400,
  },
  {
    date: new Date(2021, 0, 4).toLocaleDateString(),
    price: 95300,
  },
  {
    date: new Date(2021, 0, 3).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2021, 0, 2).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2021, 0, 1).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2020, 11, 31).toLocaleDateString(),
    price: 94100,
  },
  {
    date: new Date(2020, 11, 30).toLocaleDateString(),
    price: 94200,
  },
  {
    date: new Date(2020, 11, 29).toLocaleDateString(),
    price: 94100,
  },
  {
    date: new Date(2020, 11, 28).toLocaleDateString(),
    price: 94900,
  },
  {
    date: new Date(2020, 11, 27).toLocaleDateString(),
    price: 94200,
  },
  {
    date: new Date(2020, 11, 26).toLocaleDateString(),
    price: 94200,
  },
  {
    date: new Date(2020, 11, 25).toLocaleDateString(),
    price: 94200,
  },
  {
    date: new Date(2020, 11, 24).toLocaleDateString(),
    price: 94100,
  },
  {
    date: new Date(2020, 11, 23).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2020, 11, 22).toLocaleDateString(),
    price: 94900,
  },
  {
    date: new Date(2020, 11, 21).toLocaleDateString(),
    price: 95200,
  },
  {
    date: new Date(2020, 11, 20).toLocaleDateString(),
    price: 94300,
  },
  {
    date: new Date(2020, 11, 19).toLocaleDateString(),
    price: 94300,
  },
  {
    date: new Date(2020, 11, 18).toLocaleDateString(),
    price: 94300,
  },
  {
    date: new Date(2020, 11, 17).toLocaleDateString(),
    price: 93500,
  },
  {
    date: new Date(2020, 11, 16).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2020, 11, 15).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2020, 11, 14).toLocaleDateString(),
    price: 92400,
  },
  {
    date: new Date(2020, 11, 13).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2020, 11, 12).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2020, 11, 11).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2020, 11, 10).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2020, 11, 9).toLocaleDateString(),
    price: 93400,
  },
  {
    date: new Date(2020, 11, 8).toLocaleDateString(),
    price: 94100,
  },
  {
    date: new Date(2020, 11, 7).toLocaleDateString(),
    price: 92600,
  },
  {
    date: new Date(2020, 11, 6).toLocaleDateString(),
    price: 92700,
  },
  {
    date: new Date(2020, 11, 5).toLocaleDateString(),
    price: 92900,
  },
  {
    date: new Date(2020, 11, 4).toLocaleDateString(),
    price: 92900,
  },
  {
    date: new Date(2020, 11, 3).toLocaleDateString(),
    price: 92600,
  },
  {
    date: new Date(2020, 11, 2).toLocaleDateString(),
    price: 91000,
  },
  {
    date: new Date(2020, 11, 1).toLocaleDateString(),
    price: 90500,
  },
  {
    date: new Date(2020, 10, 30).toLocaleDateString(),
    price: 90000,
  },
  {
    date: new Date(2020, 10, 29).toLocaleDateString(),
    price: 90700,
  },
  {
    date: new Date(2020, 10, 28).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2020, 10, 27).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2020, 10, 26).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2020, 10, 25).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2020, 10, 24).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2020, 10, 23).toLocaleDateString(),
    price: 94300,
  },
  {
    date: new Date(2020, 10, 22).toLocaleDateString(),
    price: 94300,
  },
  {
    date: new Date(2020, 10, 21).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2020, 10, 20).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2020, 10, 19).toLocaleDateString(),
    price: 94400,
  },
  {
    date: new Date(2020, 10, 18).toLocaleDateString(),
    price: 95100,
  },
  {
    date: new Date(2020, 10, 17).toLocaleDateString(),
    price: 95200,
  },
  {
    date: new Date(2020, 10, 16).toLocaleDateString(),
    price: 95200,
  },
  {
    date: new Date(2020, 10, 15).toLocaleDateString(),
    price: 95200,
  },
  {
    date: new Date(2020, 10, 13).toLocaleDateString(),
    price: 95200,
  },
  {
    date: new Date(2020, 10, 12).toLocaleDateString(),
    price: 94700,
  },
  {
    date: new Date(2020, 10, 11).toLocaleDateString(),
    price: 94900,
  },
  {
    date: new Date(2020, 10, 10).toLocaleDateString(),
    price: 94800,
  },
  {
    date: new Date(2020, 10, 9).toLocaleDateString(),
    price: 98200,
  },
  {
    date: new Date(2020, 10, 8).toLocaleDateString(),
    price: 97700,
  },
  {
    date: new Date(2020, 10, 7).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2020, 10, 6).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2020, 10, 5).toLocaleDateString(),
    price: 96200,
  },
  {
    date: new Date(2020, 10, 4).toLocaleDateString(),
    price: 96300,
  },
  {
    date: new Date(2020, 10, 3).toLocaleDateString(),
    price: 95400,
  },
  {
    date: new Date(2020, 10, 2).toLocaleDateString(),
    price: 95000,
  },
  {
    date: new Date(2020, 10, 1).toLocaleDateString(),
    price: 95000,
  },
  {
    date: new Date(2020, 9, 31).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2020, 9, 30).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2020, 9, 29).toLocaleDateString(),
    price: 94700,
  },
  {
    date: new Date(2020, 9, 28).toLocaleDateString(),
    price: 95700,
  },
  {
    date: new Date(2020, 9, 27).toLocaleDateString(),
    price: 95700,
  },
  {
    date: new Date(2020, 9, 26).toLocaleDateString(),
    price: 95700,
  },
  {
    date: new Date(2020, 9, 25).toLocaleDateString(),
    price: 95700,
  },
  {
    date: new Date(2020, 9, 24).toLocaleDateString(),
    price: 95700,
  },
  {
    date: new Date(2020, 9, 23).toLocaleDateString(),
    price: 95700,
  },
  {
    date: new Date(2020, 9, 22).toLocaleDateString(),
    price: 95700,
  },
  {
    date: new Date(2020, 9, 21).toLocaleDateString(),
    price: 95500,
  },
  {
    date: new Date(2020, 9, 20).toLocaleDateString(),
    price: 94700,
  },
  {
    date: new Date(2020, 9, 19).toLocaleDateString(),
    price: 94700,
  },
  {
    date: new Date(2020, 9, 18).toLocaleDateString(),
    price: 94700,
  },
  {
    date: new Date(2020, 9, 17).toLocaleDateString(),
    price: 94900,
  },
  {
    date: new Date(2020, 9, 16).toLocaleDateString(),
    price: 94900,
  },
  {
    date: new Date(2020, 9, 15).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2020, 9, 14).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2020, 9, 13).toLocaleDateString(),
    price: 95100,
  },
  {
    date: new Date(2020, 9, 12).toLocaleDateString(),
    price: 95600,
  },
  {
    date: new Date(2020, 9, 11).toLocaleDateString(),
    price: 95600,
  },
  {
    date: new Date(2020, 9, 10).toLocaleDateString(),
    price: 94800,
  },
  {
    date: new Date(2020, 9, 9).toLocaleDateString(),
    price: 94800,
  },
  {
    date: new Date(2020, 9, 8).toLocaleDateString(),
    price: 93900,
  },
  {
    date: new Date(2020, 9, 7).toLocaleDateString(),
    price: 94100,
  },
  {
    date: new Date(2020, 9, 6).toLocaleDateString(),
    price: 94900,
  },
  {
    date: new Date(2020, 9, 5).toLocaleDateString(),
    price: 94100,
  },
  {
    date: new Date(2020, 9, 4).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2020, 9, 3).toLocaleDateString(),
    price: 94300,
  },
  {
    date: new Date(2020, 9, 2).toLocaleDateString(),
    price: 94300,
  },
  {
    date: new Date(2020, 9, 1).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2020, 8, 30).toLocaleDateString(),
    price: 94700,
  },
  {
    date: new Date(2020, 8, 29).toLocaleDateString(),
    price: 94200,
  },
  {
    date: new Date(2020, 8, 28).toLocaleDateString(),
    price: 93300,
  },
  {
    date: new Date(2020, 8, 27).toLocaleDateString(),
    price: 93300,
  },
  {
    date: new Date(2020, 8, 26).toLocaleDateString(),
    price: 93900,
  },
  {
    date: new Date(2020, 8, 25).toLocaleDateString(),
    price: 93900,
  },
  {
    date: new Date(2020, 8, 24).toLocaleDateString(),
    price: 93100,
  },
  {
    date: new Date(2020, 8, 23).toLocaleDateString(),
    price: 94300,
  },
  {
    date: new Date(2020, 8, 22).toLocaleDateString(),
    price: 95500,
  },
  {
    date: new Date(2020, 8, 21).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2020, 8, 20).toLocaleDateString(),
    price: 97000,
  },
  {
    date: new Date(2020, 8, 19).toLocaleDateString(),
    price: 97000,
  },
  {
    date: new Date(2020, 8, 18).toLocaleDateString(),
    price: 97000,
  },
  {
    date: new Date(2020, 8, 17).toLocaleDateString(),
    price: 96600,
  },
  {
    date: new Date(2020, 8, 16).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2020, 8, 15).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2020, 8, 14).toLocaleDateString(),
    price: 96900,
  },
  {
    date: new Date(2020, 8, 13).toLocaleDateString(),
    price: 96500,
  },
  {
    date: new Date(2020, 8, 12).toLocaleDateString(),
    price: 96500,
  },
  {
    date: new Date(2020, 8, 11).toLocaleDateString(),
    price: 96500,
  },
  {
    date: new Date(2020, 8, 10).toLocaleDateString(),
    price: 96800,
  },
  {
    date: new Date(2020, 8, 9).toLocaleDateString(),
    price: 96400,
  },
  {
    date: new Date(2020, 8, 8).toLocaleDateString(),
    price: 95800,
  },
  {
    date: new Date(2020, 8, 7).toLocaleDateString(),
    price: 96100,
  },
  {
    date: new Date(2020, 8, 6).toLocaleDateString(),
    price: 96100,
  },
  {
    date: new Date(2020, 8, 5).toLocaleDateString(),
    price: 96400,
  },
  {
    date: new Date(2020, 8, 4).toLocaleDateString(),
    price: 96400,
  },
  {
    date: new Date(2020, 8, 3).toLocaleDateString(),
    price: 96500,
  },
  {
    date: new Date(2020, 8, 2).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2020, 8, 1).toLocaleDateString(),
    price: 98400,
  },
  {
    date: new Date(2020, 7, 31).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2020, 7, 30).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2020, 7, 29).toLocaleDateString(),
    price: 96900,
  },
  {
    date: new Date(2020, 7, 28).toLocaleDateString(),
    price: 96900,
  },
  {
    date: new Date(2020, 7, 27).toLocaleDateString(),
    price: 97600,
  },
  {
    date: new Date(2020, 7, 26).toLocaleDateString(),
    price: 96800,
  },
  {
    date: new Date(2020, 7, 25).toLocaleDateString(),
    price: 97200,
  },
  {
    date: new Date(2020, 7, 23).toLocaleDateString(),
    price: 98400,
  },
  {
    date: new Date(2020, 7, 22).toLocaleDateString(),
    price: 98800,
  },
  {
    date: new Date(2020, 7, 21).toLocaleDateString(),
    price: 98800,
  },
  {
    date: new Date(2020, 7, 20).toLocaleDateString(),
    price: 98800,
  },
  {
    date: new Date(2020, 7, 19).toLocaleDateString(),
    price: 100400,
  },
  {
    date: new Date(2020, 7, 18).toLocaleDateString(),
    price: 100400,
  },
  {
    date: new Date(2020, 7, 17).toLocaleDateString(),
    price: 98200,
  },
  {
    date: new Date(2020, 7, 16).toLocaleDateString(),
    price: 98400,
  },
  {
    date: new Date(2020, 7, 15).toLocaleDateString(),
    price: 98600,
  },
  {
    date: new Date(2020, 7, 14).toLocaleDateString(),
    price: 98600,
  },
  {
    date: new Date(2020, 7, 13).toLocaleDateString(),
    price: 97800,
  },
  {
    date: new Date(2020, 7, 12).toLocaleDateString(),
    price: 95400,
  },
  {
    date: new Date(2020, 7, 10).toLocaleDateString(),
    price: 102400,
  },
  {
    date: new Date(2020, 7, 9).toLocaleDateString(),
    price: 102600,
  },
  {
    date: new Date(2020, 7, 8).toLocaleDateString(),
    price: 103500,
  },
  {
    date: new Date(2020, 7, 7).toLocaleDateString(),
    price: 103500,
  },
  {
    date: new Date(2020, 7, 6).toLocaleDateString(),
    price: 102500,
  },
  {
    date: new Date(2020, 7, 5).toLocaleDateString(),
    price: 101400,
  },
  {
    date: new Date(2020, 7, 4).toLocaleDateString(),
    price: 99800,
  },
  {
    date: new Date(2020, 7, 3).toLocaleDateString(),
    price: 99600,
  },
  {
    date: new Date(2020, 7, 2).toLocaleDateString(),
    price: 99600,
  },
  {
    date: new Date(2020, 7, 1).toLocaleDateString(),
    price: 99300,
  },
  {
    date: new Date(2020, 6, 31).toLocaleDateString(),
    price: 99300,
  },
  {
    date: new Date(2020, 6, 30).toLocaleDateString(),
    price: 99000,
  },
  {
    date: new Date(2020, 6, 29).toLocaleDateString(),
    price: 98500,
  },
  {
    date: new Date(2020, 6, 28).toLocaleDateString(),
    price: 98200,
  },
  {
    date: new Date(2020, 6, 27).toLocaleDateString(),
    price: 97500,
  },
  {
    date: new Date(2020, 6, 26).toLocaleDateString(),
    price: 96300,
  },
  {
    date: new Date(2020, 6, 25).toLocaleDateString(),
    price: 95800,
  },
  {
    date: new Date(2020, 6, 24).toLocaleDateString(),
    price: 95800,
  },
  {
    date: new Date(2020, 6, 23).toLocaleDateString(),
    price: 94500,
  },
  {
    date: new Date(2020, 6, 22).toLocaleDateString(),
    price: 94000,
  },
  {
    date: new Date(2020, 6, 21).toLocaleDateString(),
    price: 92700,
  },
  {
    date: new Date(2020, 6, 20).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2020, 6, 19).toLocaleDateString(),
    price: 92500,
  },
  {
    date: new Date(2020, 6, 18).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2020, 6, 17).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2020, 6, 16).toLocaleDateString(),
    price: 92700,
  },
  {
    date: new Date(2020, 6, 15).toLocaleDateString(),
    price: 92800,
  },
  {
    date: new Date(2020, 6, 14).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2020, 6, 13).toLocaleDateString(),
    price: 92300,
  },
  {
    date: new Date(2020, 6, 12).toLocaleDateString(),
    price: 92100,
  },
  {
    date: new Date(2020, 6, 11).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2020, 6, 10).toLocaleDateString(),
    price: 92200,
  },
  {
    date: new Date(2020, 6, 9).toLocaleDateString(),
    price: 92400,
  },
  {
    date: new Date(2020, 6, 8).toLocaleDateString(),
    price: 91500,
  },
  {
    date: new Date(2020, 6, 7).toLocaleDateString(),
    price: 90900,
  },
  {
    date: new Date(2020, 6, 6).toLocaleDateString(),
    price: 90200,
  },
  {
    date: new Date(2020, 6, 5).toLocaleDateString(),
    price: 90500,
  },
  {
    date: new Date(2020, 6, 4).toLocaleDateString(),
    price: 90500,
  },
  {
    date: new Date(2020, 6, 3).toLocaleDateString(),
    price: 90500,
  },
  {
    date: new Date(2020, 6, 2).toLocaleDateString(),
    price: 91000,
  },
  {
    date: new Date(2020, 6, 1).toLocaleDateString(),
    price: 91200,
  },
  {
    date: new Date(2020, 5, 30).toLocaleDateString(),
    price: 91200,
  },
  {
    date: new Date(2020, 5, 29).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2020, 5, 28).toLocaleDateString(),
    price: 91300,
  },
  {
    date: new Date(2020, 5, 27).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2020, 5, 26).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2020, 5, 25).toLocaleDateString(),
    price: 91100,
  },
  {
    date: new Date(2020, 5, 24).toLocaleDateString(),
    price: 91100,
  },
  {
    date: new Date(2020, 5, 23).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2020, 5, 22).toLocaleDateString(),
    price: 91000,
  },
  {
    date: new Date(2020, 5, 21).toLocaleDateString(),
    price: 90600,
  },
  {
    date: new Date(2020, 5, 20).toLocaleDateString(),
    price: 89900,
  },
  {
    date: new Date(2020, 5, 19).toLocaleDateString(),
    price: 89900,
  },
  {
    date: new Date(2020, 5, 18).toLocaleDateString(),
    price: 89800,
  },
  {
    date: new Date(2020, 5, 17).toLocaleDateString(),
    price: 89800,
  },
  {
    date: new Date(2020, 5, 16).toLocaleDateString(),
    price: 89700,
  },
  {
    date: new Date(2020, 5, 15).toLocaleDateString(),
    price: 89700,
  },
  {
    date: new Date(2020, 5, 14).toLocaleDateString(),
    price: 89600,
  },
  {
    date: new Date(2020, 5, 13).toLocaleDateString(),
    price: 89600,
  },
  {
    date: new Date(2020, 5, 12).toLocaleDateString(),
    price: 89600,
  },
  {
    date: new Date(2020, 5, 11).toLocaleDateString(),
    price: 89600,
  },
  {
    date: new Date(2020, 5, 10).toLocaleDateString(),
    price: 88600,
  },
  {
    date: new Date(2020, 5, 9).toLocaleDateString(),
    price: 87700,
  },
  {
    date: new Date(2020, 5, 8).toLocaleDateString(),
    price: 87500,
  },
  {
    date: new Date(2020, 5, 7).toLocaleDateString(),
    price: 87400,
  },
  {
    date: new Date(2020, 5, 6).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 5, 5).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 5, 4).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 5, 3).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 5, 2).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 5, 1).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 31).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 30).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 29).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 28).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 27).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 26).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 25).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 24).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 23).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 22).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 21).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 20).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 19).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 18).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 17).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 16).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 15).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 14).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 13).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 12).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 11).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 10).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 9).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 8).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 7).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 6).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 5).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 4).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 3).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 2).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 4, 1).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 30).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 29).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 28).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 27).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 26).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 25).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 24).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 23).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 22).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 21).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 20).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 19).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 18).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 17).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 16).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 15).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 14).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 13).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 12).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 11).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 10).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 9).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 8).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 7).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 6).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 5).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 4).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 3).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 2).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 3, 1).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 2, 31).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 2, 30).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 2, 29).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 2, 28).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 2, 27).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 2, 26).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 2, 25).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 2, 24).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 2, 23).toLocaleDateString(),
    price: 76500,
  },
  {
    date: new Date(2020, 2, 22).toLocaleDateString(),
    price: 75500,
  },
  {
    date: new Date(2020, 2, 21).toLocaleDateString(),
    price: 75500,
  },
  {
    date: new Date(2020, 2, 20).toLocaleDateString(),
    price: 75000,
  },
  {
    date: new Date(2020, 2, 19).toLocaleDateString(),
    price: 76500,
  },
  {
    date: new Date(2020, 2, 18).toLocaleDateString(),
    price: 75500,
  },
  {
    date: new Date(2020, 2, 17).toLocaleDateString(),
    price: 77500,
  },
  {
    date: new Date(2020, 2, 16).toLocaleDateString(),
    price: 77000,
  },
  {
    date: new Date(2020, 2, 15).toLocaleDateString(),
    price: 78500,
  },
  {
    date: new Date(2020, 2, 14).toLocaleDateString(),
    price: 78500,
  },
  {
    date: new Date(2020, 2, 13).toLocaleDateString(),
    price: 81500,
  },
  {
    date: new Date(2020, 2, 12).toLocaleDateString(),
    price: 82300,
  },
  {
    date: new Date(2020, 2, 11).toLocaleDateString(),
    price: 82700,
  },
  {
    date: new Date(2020, 2, 10).toLocaleDateString(),
    price: 82500,
  },
  {
    date: new Date(2020, 2, 9).toLocaleDateString(),
    price: 82500,
  },
  {
    date: new Date(2020, 2, 8).toLocaleDateString(),
    price: 82500,
  },
  {
    date: new Date(2020, 2, 7).toLocaleDateString(),
    price: 82500,
  },
  {
    date: new Date(2020, 2, 6).toLocaleDateString(),
    price: 82500,
  },
  {
    date: new Date(2020, 2, 5).toLocaleDateString(),
    price: 80700,
  },
  {
    date: new Date(2020, 2, 4).toLocaleDateString(),
    price: 80500,
  },
  {
    date: new Date(2020, 2, 3).toLocaleDateString(),
    price: 78300,
  },
  {
    date: new Date(2020, 2, 2).toLocaleDateString(),
    price: 78000,
  },
  {
    date: new Date(2020, 2, 1).toLocaleDateString(),
    price: 78000,
  },
  {
    date: new Date(2020, 1, 29).toLocaleDateString(),
    price: 79200,
  },
  {
    date: new Date(2020, 1, 28).toLocaleDateString(),
    price: 79200,
  },
  {
    date: new Date(2020, 1, 27).toLocaleDateString(),
    price: 79700,
  },
  {
    date: new Date(2020, 1, 26).toLocaleDateString(),
    price: 79500,
  },
  {
    date: new Date(2020, 1, 25).toLocaleDateString(),
    price: 80000,
  },
  {
    date: new Date(2020, 1, 24).toLocaleDateString(),
    price: 80300,
  },
  {
    date: new Date(2020, 1, 23).toLocaleDateString(),
    price: 78800,
  },
  {
    date: new Date(2020, 1, 22).toLocaleDateString(),
    price: 78100,
  },
  {
    date: new Date(2020, 1, 21).toLocaleDateString(),
    price: 78100,
  },
  {
    date: new Date(2020, 1, 20).toLocaleDateString(),
    price: 77600,
  },
  {
    date: new Date(2020, 1, 19).toLocaleDateString(),
    price: 77100,
  },
  {
    date: new Date(2020, 1, 18).toLocaleDateString(),
    price: 76700,
  },
  {
    date: new Date(2020, 1, 17).toLocaleDateString(),
    price: 76500,
  },
  {
    date: new Date(2020, 1, 16).toLocaleDateString(),
    price: 76500,
  },
  {
    date: new Date(2020, 1, 15).toLocaleDateString(),
    price: 76000,
  },
  {
    date: new Date(2020, 1, 14).toLocaleDateString(),
    price: 76000,
  },
  {
    date: new Date(2020, 1, 13).toLocaleDateString(),
    price: 76000,
  },
  {
    date: new Date(2020, 1, 12).toLocaleDateString(),
    price: 75700,
  },
  {
    date: new Date(2020, 1, 11).toLocaleDateString(),
    price: 75900,
  },
  {
    date: new Date(2020, 1, 10).toLocaleDateString(),
    price: 76000,
  },
  {
    date: new Date(2020, 1, 9).toLocaleDateString(),
    price: 76000,
  },
  {
    date: new Date(2020, 1, 8).toLocaleDateString(),
    price: 75600,
  },
  {
    date: new Date(2020, 1, 7).toLocaleDateString(),
    price: 75600,
  },
  {
    date: new Date(2020, 1, 6).toLocaleDateString(),
    price: 75200,
  },
  {
    date: new Date(2020, 1, 5).toLocaleDateString(),
    price: 75200,
  },
  {
    date: new Date(2020, 1, 4).toLocaleDateString(),
    price: 76000,
  },
  {
    date: new Date(2020, 1, 3).toLocaleDateString(),
    price: 76500,
  },
  {
    date: new Date(2020, 1, 2).toLocaleDateString(),
    price: 76500,
  },
  {
    date: new Date(2020, 1, 1).toLocaleDateString(),
    price: 76000,
  },
  {
    date: new Date(2020, 0, 31).toLocaleDateString(),
    price: 76000,
  },
  {
    date: new Date(2020, 0, 30).toLocaleDateString(),
    price: 76300,
  },
  {
    date: new Date(2020, 0, 29).toLocaleDateString(),
    price: 75600,
  },
  {
    date: new Date(2020, 0, 28).toLocaleDateString(),
    price: 76000,
  },
  {
    date: new Date(2020, 0, 27).toLocaleDateString(),
    price: 76000,
  },
  {
    date: new Date(2020, 0, 26).toLocaleDateString(),
    price: 75500,
  },
  {
    date: new Date(2020, 0, 25).toLocaleDateString(),
    price: 75200,
  },
  {
    date: new Date(2020, 0, 24).toLocaleDateString(),
    price: 75200,
  },
  {
    date: new Date(2020, 0, 23).toLocaleDateString(),
    price: 75000,
  },
  {
    date: new Date(2020, 0, 22).toLocaleDateString(),
    price: 74800,
  },
  {
    date: new Date(2020, 0, 21).toLocaleDateString(),
    price: 75300,
  },
  {
    date: new Date(2020, 0, 20).toLocaleDateString(),
    price: 75000,
  },
  {
    date: new Date(2020, 0, 19).toLocaleDateString(),
    price: 75000,
  },
  {
    date: new Date(2020, 0, 18).toLocaleDateString(),
    price: 74800,
  },
  {
    date: new Date(2020, 0, 17).toLocaleDateString(),
    price: 74800,
  },
  {
    date: new Date(2020, 0, 16).toLocaleDateString(),
    price: 74700,
  },
  {
    date: new Date(2020, 0, 15).toLocaleDateString(),
    price: 74700,
  },
  {
    date: new Date(2020, 0, 14).toLocaleDateString(),
    price: 74000,
  },
  {
    date: new Date(2020, 0, 13).toLocaleDateString(),
    price: 74800,
  },
  {
    date: new Date(2020, 0, 12).toLocaleDateString(),
    price: 74600,
  },
  {
    date: new Date(2020, 0, 11).toLocaleDateString(),
    price: 74600,
  },
  {
    date: new Date(2020, 0, 10).toLocaleDateString(),
    price: 74600,
  },
  {
    date: new Date(2020, 0, 9).toLocaleDateString(),
    price: 75500,
  },
  {
    date: new Date(2020, 0, 8).toLocaleDateString(),
    price: 76500,
  },
  {
    date: new Date(2020, 0, 7).toLocaleDateString(),
    price: 75500,
  },
  {
    date: new Date(2020, 0, 6).toLocaleDateString(),
    price: 76000,
  },
  {
    date: new Date(2020, 0, 5).toLocaleDateString(),
    price: 75500,
  },
  {
    date: new Date(2020, 0, 4).toLocaleDateString(),
    price: 74500,
  },
  {
    date: new Date(2020, 0, 3).toLocaleDateString(),
    price: 74500,
  },
  {
    date: new Date(2020, 0, 2).toLocaleDateString(),
    price: 73500,
  },
  {
    date: new Date(2020, 0, 1).toLocaleDateString(),
    price: 73500,
  },
  {
    date: new Date(2019, 11, 31).toLocaleDateString(),
    price: 73500,
  },
  {
    date: new Date(2019, 11, 30).toLocaleDateString(),
    price: 73300,
  },
  {
    date: new Date(2019, 11, 29).toLocaleDateString(),
    price: 73300,
  },
  {
    date: new Date(2019, 11, 28).toLocaleDateString(),
    price: 73300,
  },
  {
    date: new Date(2019, 11, 27).toLocaleDateString(),
    price: 73300,
  },
  {
    date: new Date(2019, 11, 26).toLocaleDateString(),
    price: 72800,
  },
  {
    date: new Date(2019, 11, 25).toLocaleDateString(),
    price: 72800,
  },
  {
    date: new Date(2019, 11, 24).toLocaleDateString(),
    price: 72200,
  },
  {
    date: new Date(2019, 11, 23).toLocaleDateString(),
    price: 71900,
  },
  {
    date: new Date(2019, 11, 22).toLocaleDateString(),
    price: 71600,
  },
  {
    date: new Date(2019, 11, 21).toLocaleDateString(),
    price: 71600,
  },
  {
    date: new Date(2019, 11, 20).toLocaleDateString(),
    price: 71600,
  },
  {
    date: new Date(2019, 11, 19).toLocaleDateString(),
    price: 71600,
  },
  {
    date: new Date(2019, 11, 18).toLocaleDateString(),
    price: 71600,
  },
  {
    date: new Date(2019, 11, 17).toLocaleDateString(),
    price: 71500,
  },
  {
    date: new Date(2019, 11, 16).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 11, 15).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 11, 14).toLocaleDateString(),
    price: 70800,
  },
  {
    date: new Date(2019, 11, 13).toLocaleDateString(),
    price: 70800,
  },
  {
    date: new Date(2019, 11, 12).toLocaleDateString(),
    price: 71200,
  },
  {
    date: new Date(2019, 11, 11).toLocaleDateString(),
    price: 70800,
  },
  {
    date: new Date(2019, 11, 10).toLocaleDateString(),
    price: 70800,
  },
  {
    date: new Date(2019, 11, 9).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 11, 8).toLocaleDateString(),
    price: 71200,
  },
  {
    date: new Date(2019, 11, 7).toLocaleDateString(),
    price: 71700,
  },
  {
    date: new Date(2019, 11, 6).toLocaleDateString(),
    price: 71700,
  },
  {
    date: new Date(2019, 11, 5).toLocaleDateString(),
    price: 72000,
  },
  {
    date: new Date(2019, 11, 4).toLocaleDateString(),
    price: 72200,
  },
  {
    date: new Date(2019, 11, 3).toLocaleDateString(),
    price: 71400,
  },
  {
    date: new Date(2019, 11, 2).toLocaleDateString(),
    price: 71400,
  },
  {
    date: new Date(2019, 11, 1).toLocaleDateString(),
    price: 71600,
  },
  {
    date: new Date(2019, 10, 30).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 10, 29).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 10, 28).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 10, 27).toLocaleDateString(),
    price: 71200,
  },
  {
    date: new Date(2019, 10, 26).toLocaleDateString(),
    price: 71200,
  },
  {
    date: new Date(2019, 10, 25).toLocaleDateString(),
    price: 71600,
  },
  {
    date: new Date(2019, 10, 24).toLocaleDateString(),
    price: 71600,
  },
  {
    date: new Date(2019, 10, 23).toLocaleDateString(),
    price: 71700,
  },
  {
    date: new Date(2019, 10, 22).toLocaleDateString(),
    price: 71700,
  },
  {
    date: new Date(2019, 10, 21).toLocaleDateString(),
    price: 72000,
  },
  {
    date: new Date(2019, 10, 20).toLocaleDateString(),
    price: 72100,
  },
  {
    date: new Date(2019, 10, 19).toLocaleDateString(),
    price: 72000,
  },
  {
    date: new Date(2019, 10, 18).toLocaleDateString(),
    price: 71600,
  },
  {
    date: new Date(2019, 10, 17).toLocaleDateString(),
    price: 71800,
  },
  {
    date: new Date(2019, 10, 16).toLocaleDateString(),
    price: 71800,
  },
  {
    date: new Date(2019, 10, 15).toLocaleDateString(),
    price: 71800,
  },
  {
    date: new Date(2019, 10, 14).toLocaleDateString(),
    price: 72000,
  },
  {
    date: new Date(2019, 10, 13).toLocaleDateString(),
    price: 71400,
  },
  {
    date: new Date(2019, 10, 12).toLocaleDateString(),
    price: 71200,
  },
  {
    date: new Date(2019, 10, 11).toLocaleDateString(),
    price: 71200,
  },
  {
    date: new Date(2019, 10, 10).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 10, 9).toLocaleDateString(),
    price: 69900,
  },
  {
    date: new Date(2019, 10, 8).toLocaleDateString(),
    price: 69900,
  },
  {
    date: new Date(2019, 10, 7).toLocaleDateString(),
    price: 70600,
  },
  {
    date: new Date(2019, 10, 6).toLocaleDateString(),
    price: 70200,
  },
  {
    date: new Date(2019, 10, 5).toLocaleDateString(),
    price: 70800,
  },
  {
    date: new Date(2019, 10, 4).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 10, 3).toLocaleDateString(),
    price: 71200,
  },
  {
    date: new Date(2019, 10, 2).toLocaleDateString(),
    price: 71200,
  },
  {
    date: new Date(2019, 10, 1).toLocaleDateString(),
    price: 71200,
  },
  {
    date: new Date(2019, 9, 31).toLocaleDateString(),
    price: 70500,
  },
  {
    date: new Date(2019, 9, 30).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 9, 29).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 9, 28).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 9, 27).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 9, 26).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 9, 25).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 9, 24).toLocaleDateString(),
    price: 70400,
  },
  {
    date: new Date(2019, 9, 23).toLocaleDateString(),
    price: 70400,
  },
  {
    date: new Date(2019, 9, 22).toLocaleDateString(),
    price: 70200,
  },
  {
    date: new Date(2019, 9, 21).toLocaleDateString(),
    price: 70400,
  },
  {
    date: new Date(2019, 9, 20).toLocaleDateString(),
    price: 70400,
  },
  {
    date: new Date(2019, 9, 19).toLocaleDateString(),
    price: 70600,
  },
  {
    date: new Date(2019, 9, 18).toLocaleDateString(),
    price: 70600,
  },
  {
    date: new Date(2019, 9, 17).toLocaleDateString(),
    price: 70600,
  },
  {
    date: new Date(2019, 9, 16).toLocaleDateString(),
    price: 70600,
  },
  {
    date: new Date(2019, 9, 15).toLocaleDateString(),
    price: 70700,
  },
  {
    date: new Date(2019, 9, 14).toLocaleDateString(),
    price: 70000,
  },
  {
    date: new Date(2019, 9, 13).toLocaleDateString(),
    price: 70100,
  },
  {
    date: new Date(2019, 9, 12).toLocaleDateString(),
    price: 70400,
  },
  {
    date: new Date(2019, 9, 11).toLocaleDateString(),
    price: 70400,
  },
  {
    date: new Date(2019, 9, 10).toLocaleDateString(),
    price: 70900,
  },
  {
    date: new Date(2019, 9, 9).toLocaleDateString(),
    price: 70900,
  },
  {
    date: new Date(2019, 9, 8).toLocaleDateString(),
    price: 70900,
  },
  {
    date: new Date(2019, 9, 7).toLocaleDateString(),
    price: 70900,
  },
  {
    date: new Date(2019, 9, 6).toLocaleDateString(),
    price: 70900,
  },
  {
    date: new Date(2019, 9, 5).toLocaleDateString(),
    price: 70900,
  },
  {
    date: new Date(2019, 9, 4).toLocaleDateString(),
    price: 70900,
  },
  {
    date: new Date(2019, 9, 3).toLocaleDateString(),
    price: 70900,
  },
  {
    date: new Date(2019, 9, 2).toLocaleDateString(),
    price: 69800,
  },
  {
    date: new Date(2019, 9, 1).toLocaleDateString(),
    price: 69200,
  },
  {
    date: new Date(2019, 8, 30).toLocaleDateString(),
    price: 70000,
  },
  {
    date: new Date(2019, 8, 29).toLocaleDateString(),
    price: 70200,
  },
  {
    date: new Date(2019, 8, 28).toLocaleDateString(),
    price: 70800,
  },
  {
    date: new Date(2019, 8, 27).toLocaleDateString(),
    price: 70800,
  },
  {
    date: new Date(2019, 8, 26).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 8, 25).toLocaleDateString(),
    price: 72000,
  },
  {
    date: new Date(2019, 8, 24).toLocaleDateString(),
    price: 71400,
  },
  {
    date: new Date(2019, 8, 23).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 8, 22).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 8, 21).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 8, 20).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 8, 19).toLocaleDateString(),
    price: 70700,
  },
  {
    date: new Date(2019, 8, 18).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 8, 17).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 8, 16).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 8, 15).toLocaleDateString(),
    price: 70200,
  },
  {
    date: new Date(2019, 8, 14).toLocaleDateString(),
    price: 70600,
  },
  {
    date: new Date(2019, 8, 13).toLocaleDateString(),
    price: 70600,
  },
  {
    date: new Date(2019, 8, 12).toLocaleDateString(),
    price: 70800,
  },
  {
    date: new Date(2019, 8, 11).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 8, 10).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 8, 9).toLocaleDateString(),
    price: 71700,
  },
  {
    date: new Date(2019, 8, 8).toLocaleDateString(),
    price: 71500,
  },
  {
    date: new Date(2019, 8, 7).toLocaleDateString(),
    price: 72000,
  },
  {
    date: new Date(2019, 8, 6).toLocaleDateString(),
    price: 72000,
  },
  {
    date: new Date(2019, 8, 5).toLocaleDateString(),
    price: 73400,
  },
  {
    date: new Date(2019, 8, 4).toLocaleDateString(),
    price: 73500,
  },
  {
    date: new Date(2019, 8, 3).toLocaleDateString(),
    price: 72500,
  },
  {
    date: new Date(2019, 8, 2).toLocaleDateString(),
    price: 72000,
  },
  {
    date: new Date(2019, 8, 1).toLocaleDateString(),
    price: 72000,
  },
  {
    date: new Date(2019, 7, 31).toLocaleDateString(),
    price: 72400,
  },
  {
    date: new Date(2019, 7, 30).toLocaleDateString(),
    price: 72400,
  },
  {
    date: new Date(2019, 7, 29).toLocaleDateString(),
    price: 73400,
  },
  {
    date: new Date(2019, 7, 28).toLocaleDateString(),
    price: 72600,
  },
  {
    date: new Date(2019, 7, 27).toLocaleDateString(),
    price: 72600,
  },
  {
    date: new Date(2019, 7, 26).toLocaleDateString(),
    price: 73500,
  },
  {
    date: new Date(2019, 7, 25).toLocaleDateString(),
    price: 72500,
  },
  {
    date: new Date(2019, 7, 24).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 7, 23).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 7, 22).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 7, 21).toLocaleDateString(),
    price: 71300,
  },
  {
    date: new Date(2019, 7, 20).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 7, 19).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 7, 18).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 7, 17).toLocaleDateString(),
    price: 71500,
  },
  {
    date: new Date(2019, 7, 16).toLocaleDateString(),
    price: 71500,
  },
  {
    date: new Date(2019, 7, 15).toLocaleDateString(),
    price: 71500,
  },
  {
    date: new Date(2019, 7, 14).toLocaleDateString(),
    price: 70300,
  },
  {
    date: new Date(2019, 7, 13).toLocaleDateString(),
    price: 71000,
  },
  {
    date: new Date(2019, 7, 12).toLocaleDateString(),
    price: 70000,
  },
  {
    date: new Date(2019, 7, 11).toLocaleDateString(),
    price: 70000,
  },
  {
    date: new Date(2019, 7, 10).toLocaleDateString(),
    price: 70000,
  },
  {
    date: new Date(2019, 7, 9).toLocaleDateString(),
    price: 70000,
  },
  {
    date: new Date(2019, 7, 8).toLocaleDateString(),
    price: 70000,
  },
  {
    date: new Date(2019, 7, 7).toLocaleDateString(),
    price: 69500,
  },
  {
    date: new Date(2019, 7, 6).toLocaleDateString(),
    price: 68000,
  },
  {
    date: new Date(2019, 7, 5).toLocaleDateString(),
    price: 67800,
  },
  {
    date: new Date(2019, 7, 4).toLocaleDateString(),
    price: 66300,
  },
  {
    date: new Date(2019, 7, 3).toLocaleDateString(),
    price: 65800,
  },
  {
    date: new Date(2019, 7, 2).toLocaleDateString(),
    price: 65800,
  },
  {
    date: new Date(2019, 7, 1).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 31).toLocaleDateString(),
    price: 65400,
  },
  {
    date: new Date(2019, 6, 30).toLocaleDateString(),
    price: 65200,
  },
  {
    date: new Date(2019, 6, 29).toLocaleDateString(),
    price: 65200,
  },
  {
    date: new Date(2019, 6, 28).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 27).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 26).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 25).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 24).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 23).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 22).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 21).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 20).toLocaleDateString(),
    price: 65500,
  },
  {
    date: new Date(2019, 6, 19).toLocaleDateString(),
    price: 65500,
  },
  {
    date: new Date(2019, 6, 18).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 17).toLocaleDateString(),
    price: 64500,
  },
  {
    date: new Date(2019, 6, 16).toLocaleDateString(),
    price: 64500,
  },
  {
    date: new Date(2019, 6, 15).toLocaleDateString(),
    price: 64500,
  },
  {
    date: new Date(2019, 6, 14).toLocaleDateString(),
    price: 64500,
  },
  {
    date: new Date(2019, 6, 13).toLocaleDateString(),
    price: 64500,
  },
  {
    date: new Date(2019, 6, 12).toLocaleDateString(),
    price: 64500,
  },
  {
    date: new Date(2019, 6, 11).toLocaleDateString(),
    price: 64700,
  },
  {
    date: new Date(2019, 6, 10).toLocaleDateString(),
    price: 64300,
  },
  {
    date: new Date(2019, 6, 9).toLocaleDateString(),
    price: 64500,
  },
  {
    date: new Date(2019, 6, 8).toLocaleDateString(),
    price: 64500,
  },
  {
    date: new Date(2019, 6, 7).toLocaleDateString(),
    price: 64500,
  },
  {
    date: new Date(2019, 6, 6).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 5).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 4).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 3).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 6, 2).toLocaleDateString(),
    price: 64500,
  },
  {
    date: new Date(2019, 6, 1).toLocaleDateString(),
    price: 64500,
  },
  {
    date: new Date(2019, 5, 30).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 5, 29).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 5, 28).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 5, 27).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 5, 26).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 5, 25).toLocaleDateString(),
    price: 65500,
  },
  {
    date: new Date(2019, 5, 24).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 5, 23).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 5, 22).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 5, 21).toLocaleDateString(),
    price: 65000,
  },
  {
    date: new Date(2019, 5, 20).toLocaleDateString(),
    price: 64000,
  },
  {
    date: new Date(2019, 5, 19).toLocaleDateString(),
    price: 63000,
  },
  {
    date: new Date(2019, 5, 18).toLocaleDateString(),
    price: 63000,
  },
  {
    date: new Date(2019, 5, 17).toLocaleDateString(),
    price: 63100,
  },
  {
    date: new Date(2019, 5, 16).toLocaleDateString(),
    price: 63000,
  },
  {
    date: new Date(2019, 5, 15).toLocaleDateString(),
    price: 63000,
  },
  {
    date: new Date(2019, 5, 14).toLocaleDateString(),
    price: 63000,
  },
  {
    date: new Date(2019, 5, 13).toLocaleDateString(),
    price: 62400,
  },
  {
    date: new Date(2019, 5, 12).toLocaleDateString(),
    price: 62300,
  },
  {
    date: new Date(2019, 5, 11).toLocaleDateString(),
    price: 62300,
  },
  {
    date: new Date(2019, 5, 10).toLocaleDateString(),
    price: 62300,
  },
  {
    date: new Date(2019, 5, 9).toLocaleDateString(),
    price: 62300,
  },
  {
    date: new Date(2019, 5, 8).toLocaleDateString(),
    price: 62300,
  },
  {
    date: new Date(2019, 5, 7).toLocaleDateString(),
    price: 62300,
  },
  {
    date: new Date(2019, 5, 6).toLocaleDateString(),
    price: 62300,
  },
  {
    date: new Date(2019, 5, 5).toLocaleDateString(),
    price: 62000,
  },
  {
    date: new Date(2019, 5, 4).toLocaleDateString(),
    price: 61700,
  },
  {
    date: new Date(2019, 5, 3).toLocaleDateString(),
    price: 61500,
  },
  {
    date: new Date(2019, 5, 2).toLocaleDateString(),
    price: 61500,
  },
  {
    date: new Date(2019, 5, 1).toLocaleDateString(),
    price: 61000,
  },
  {
    date: new Date(2019, 4, 31).toLocaleDateString(),
    price: 61000,
  },
  {
    date: new Date(2019, 4, 30).toLocaleDateString(),
    price: 59500,
  },
  {
    date: new Date(2019, 4, 29).toLocaleDateString(),
    price: 59500,
  },
  {
    date: new Date(2019, 4, 28).toLocaleDateString(),
    price: 59600,
  },
  {
    date: new Date(2019, 4, 27).toLocaleDateString(),
    price: 59600,
  },
  {
    date: new Date(2019, 4, 26).toLocaleDateString(),
    price: 59700,
  },
  {
    date: new Date(2019, 4, 25).toLocaleDateString(),
    price: 59700,
  },
  {
    date: new Date(2019, 4, 24).toLocaleDateString(),
    price: 59700,
  },
  {
    date: new Date(2019, 4, 23).toLocaleDateString(),
    price: 59200,
  },
  {
    date: new Date(2019, 4, 22).toLocaleDateString(),
    price: 59400,
  },
  {
    date: new Date(2019, 4, 21).toLocaleDateString(),
    price: 59500,
  },
  {
    date: new Date(2019, 4, 20).toLocaleDateString(),
    price: 59500,
  },
  {
    date: new Date(2019, 4, 19).toLocaleDateString(),
    price: 60000,
  },
  {
    date: new Date(2019, 4, 18).toLocaleDateString(),
    price: 60200,
  },
  {
    date: new Date(2019, 4, 17).toLocaleDateString(),
    price: 60200,
  },
  {
    date: new Date(2019, 4, 16).toLocaleDateString(),
    price: 60700,
  },
  {
    date: new Date(2019, 4, 15).toLocaleDateString(),
    price: 60600,
  },
  {
    date: new Date(2019, 4, 14).toLocaleDateString(),
    price: 61000,
  },
  {
    date: new Date(2019, 4, 13).toLocaleDateString(),
    price: 60000,
  },
  {
    date: new Date(2019, 4, 12).toLocaleDateString(),
    price: 60000,
  },
  {
    date: new Date(2019, 4, 11).toLocaleDateString(),
    price: 60000,
  },
  {
    date: new Date(2019, 4, 10).toLocaleDateString(),
    price: 60000,
  },
  {
    date: new Date(2019, 4, 7).toLocaleDateString(),
    price: 59500,
  },
  {
    date: new Date(2019, 4, 6).toLocaleDateString(),
    price: 59500,
  },
  {
    date: new Date(2019, 4, 5).toLocaleDateString(),
    price: 59100,
  },
  {
    date: new Date(2019, 4, 4).toLocaleDateString(),
    price: 59000,
  },
  {
    date: new Date(2019, 4, 3).toLocaleDateString(),
    price: 59000,
  },
  {
    date: new Date(2019, 4, 2).toLocaleDateString(),
    price: 59300,
  },
  {
    date: new Date(2019, 4, 1).toLocaleDateString(),
    price: 59600,
  },
  {
    date: new Date(2019, 3, 30).toLocaleDateString(),
    price: 59700,
  },
  {
    date: new Date(2019, 3, 29).toLocaleDateString(),
    price: 59900,
  },
  {
    date: new Date(2019, 3, 28).toLocaleDateString(),
    price: 59800,
  },
  {
    date: new Date(2019, 3, 27).toLocaleDateString(),
    price: 59800,
  },
  {
    date: new Date(2019, 3, 26).toLocaleDateString(),
    price: 59800,
  },
  {
    date: new Date(2019, 3, 25).toLocaleDateString(),
    price: 59600,
  },
  {
    date: new Date(2019, 3, 24).toLocaleDateString(),
    price: 59200,
  },
  {
    date: new Date(2019, 3, 23).toLocaleDateString(),
    price: 59300,
  },
  {
    date: new Date(2019, 3, 22).toLocaleDateString(),
    price: 59600,
  },
  {
    date: new Date(2019, 3, 21).toLocaleDateString(),
    price: 59100,
  },
  {
    date: new Date(2019, 3, 20).toLocaleDateString(),
    price: 59100,
  },
  {
    date: new Date(2019, 3, 19).toLocaleDateString(),
    price: 59100,
  },
  {
    date: new Date(2019, 3, 18).toLocaleDateString(),
    price: 59100,
  },
  {
    date: new Date(2019, 3, 17).toLocaleDateString(),
    price: 59300,
  },
  {
    date: new Date(2019, 3, 16).toLocaleDateString(),
    price: 59600,
  },
  {
    date: new Date(2019, 3, 15).toLocaleDateString(),
    price: 59600,
  },
  {
    date: new Date(2019, 3, 14).toLocaleDateString(),
    price: 59600,
  },
  {
    date: new Date(2019, 3, 13).toLocaleDateString(),
    price: 59600,
  },
  {
    date: new Date(2019, 3, 12).toLocaleDateString(),
    price: 59600,
  },
  {
    date: new Date(2019, 3, 11).toLocaleDateString(),
    price: 60200,
  },
  {
    date: new Date(2019, 3, 10).toLocaleDateString(),
    price: 60100,
  },
  {
    date: new Date(2019, 3, 9).toLocaleDateString(),
    price: 60300,
  },
  {
    date: new Date(2019, 3, 8).toLocaleDateString(),
    price: 60000,
  },
  {
    date: new Date(2019, 3, 7).toLocaleDateString(),
    price: 59800,
  },
  {
    date: new Date(2019, 3, 6).toLocaleDateString(),
    price: 59500,
  },
  {
    date: new Date(2019, 3, 5).toLocaleDateString(),
    price: 59500,
  },
  {
    date: new Date(2019, 3, 4).toLocaleDateString(),
    price: 59400,
  },
  {
    date: new Date(2019, 3, 3).toLocaleDateString(),
    price: 59500,
  },
  {
    date: new Date(2019, 3, 2).toLocaleDateString(),
    price: 59500,
  },
  {
    date: new Date(2019, 3, 1).toLocaleDateString(),
    price: 59700,
  },
  {
    date: new Date(2019, 2, 31).toLocaleDateString(),
    price: 59700,
  },
  {
    date: new Date(2019, 2, 30).toLocaleDateString(),
    price: 59700,
  },
  {
    date: new Date(2019, 2, 29).toLocaleDateString(),
    price: 60300,
  },
  {
    date: new Date(2019, 2, 28).toLocaleDateString(),
    price: 60300,
  },
  {
    date: new Date(2019, 2, 27).toLocaleDateString(),
    price: 60500,
  },
  {
    date: new Date(2019, 2, 26).toLocaleDateString(),
    price: 60500,
  },
  {
    date: new Date(2019, 2, 25).toLocaleDateString(),
    price: 60400,
  },
  {
    date: new Date(2019, 2, 24).toLocaleDateString(),
    price: 60000,
  },
  {
    date: new Date(2019, 2, 23).toLocaleDateString(),
    price: 60000,
  },
  {
    date: new Date(2019, 2, 22).toLocaleDateString(),
    price: 60200,
  },
  {
    date: new Date(2019, 2, 21).toLocaleDateString(),
    price: 59700,
  },
  {
    date: new Date(2019, 2, 20).toLocaleDateString(),
    price: 59700,
  },
  {
    date: new Date(2019, 2, 19).toLocaleDateString(),
    price: 59800,
  },
  {
    date: new Date(2019, 2, 18).toLocaleDateString(),
    price: 59800,
  },
  {
    date: new Date(2019, 2, 17).toLocaleDateString(),
    price: 60000,
  },
  {
    date: new Date(2019, 2, 16).toLocaleDateString(),
    price: 60000,
  },
  {
    date: new Date(2019, 2, 15).toLocaleDateString(),
    price: 60500,
  },
  {
    date: new Date(2019, 2, 14).toLocaleDateString(),
    price: 60600,
  },
  {
    date: new Date(2019, 2, 13).toLocaleDateString(),
    price: 60600,
  },
  {
    date: new Date(2019, 2, 12).toLocaleDateString(),
    price: 60300,
  },
  {
    date: new Date(2019, 2, 11).toLocaleDateString(),
    price: 60500,
  },
  {
    date: new Date(2019, 2, 10).toLocaleDateString(),
    price: 60500,
  },
  {
    date: new Date(2019, 2, 9).toLocaleDateString(),
    price: 60200,
  },
  {
    date: new Date(2019, 2, 8).toLocaleDateString(),
    price: 60200,
  },
  {
    date: new Date(2019, 2, 7).toLocaleDateString(),
    price: 60200,
  },
  {
    date: new Date(2019, 2, 6).toLocaleDateString(),
    price: 60700,
  },
  {
    date: new Date(2019, 2, 5).toLocaleDateString(),
    price: 61000,
  },
  {
    date: new Date(2019, 2, 4).toLocaleDateString(),
    price: 61500,
  },
  {
    date: new Date(2019, 2, 3).toLocaleDateString(),
    price: 61500,
  },
  {
    date: new Date(2019, 2, 2).toLocaleDateString(),
    price: 62000,
  },
  {
    date: new Date(2019, 2, 1).toLocaleDateString(),
    price: 62000,
  },
  {
    date: new Date(2019, 1, 28).toLocaleDateString(),
    price: 62600,
  },
  {
    date: new Date(2019, 1, 27).toLocaleDateString(),
    price: 62600,
  },
  {
    date: new Date(2019, 1, 26).toLocaleDateString(),
    price: 62800,
  },
  {
    date: new Date(2019, 1, 25).toLocaleDateString(),
    price: 62700,
  },
  {
    date: new Date(2019, 1, 24).toLocaleDateString(),
    price: 62600,
  },
  {
    date: new Date(2019, 1, 23).toLocaleDateString(),
    price: 62600,
  },
  {
    date: new Date(2019, 1, 22).toLocaleDateString(),
    price: 62600,
  },
  {
    date: new Date(2019, 1, 21).toLocaleDateString(),
    price: 63100,
  },
  {
    date: new Date(2019, 1, 20).toLocaleDateString(),
    price: 63300,
  },
  {
    date: new Date(2019, 1, 19).toLocaleDateString(),
    price: 62700,
  },
  {
    date: new Date(2019, 1, 18).toLocaleDateString(),
    price: 62700,
  },
  {
    date: new Date(2019, 1, 17).toLocaleDateString(),
    price: 62500,
  },
  {
    date: new Date(2019, 1, 16).toLocaleDateString(),
    price: 62100,
  },
  {
    date: new Date(2019, 1, 15).toLocaleDateString(),
    price: 62100,
  },
  {
    date: new Date(2019, 1, 14).toLocaleDateString(),
    price: 61700,
  },
  {
    date: new Date(2019, 1, 13).toLocaleDateString(),
    price: 61600,
  },
  {
    date: new Date(2019, 1, 12).toLocaleDateString(),
    price: 61800,
  },
  {
    date: new Date(2019, 1, 11).toLocaleDateString(),
    price: 62000,
  },
  {
    date: new Date(2019, 1, 10).toLocaleDateString(),
    price: 62100,
  },
  {
    date: new Date(2019, 1, 9).toLocaleDateString(),
    price: 62100,
  },
  {
    date: new Date(2019, 1, 8).toLocaleDateString(),
    price: 62100,
  },
  {
    date: new Date(2019, 1, 7).toLocaleDateString(),
    price: 62000,
  },
  {
    date: new Date(2019, 1, 6).toLocaleDateString(),
    price: 62400,
  },
  {
    date: new Date(2019, 1, 5).toLocaleDateString(),
    price: 62600,
  },
  {
    date: new Date(2019, 1, 4).toLocaleDateString(),
    price: 62500,
  },
  {
    date: new Date(2019, 1, 3).toLocaleDateString(),
    price: 62300,
  },
  {
    date: new Date(2019, 1, 2).toLocaleDateString(),
    price: 62300,
  },
  {
    date: new Date(2019, 1, 1).toLocaleDateString(),
    price: 62300,
  },
  {
    date: new Date(2019, 0, 31).toLocaleDateString(),
    price: 62200,
  },
  {
    date: new Date(2019, 0, 30).toLocaleDateString(),
    price: 62200,
  },
  {
    date: new Date(2019, 0, 29).toLocaleDateString(),
    price: 61500,
  },
  {
    date: new Date(2019, 0, 28).toLocaleDateString(),
    price: 61400,
  },
  {
    date: new Date(2019, 0, 27).toLocaleDateString(),
    price: 61200,
  },
  {
    date: new Date(2019, 0, 26).toLocaleDateString(),
    price: 60600,
  },
  {
    date: new Date(2019, 0, 25).toLocaleDateString(),
    price: 60600,
  },
  {
    date: new Date(2019, 0, 24).toLocaleDateString(),
    price: 60900,
  },
  {
    date: new Date(2019, 0, 23).toLocaleDateString(),
    price: 60900,
  },
  {
    date: new Date(2019, 0, 22).toLocaleDateString(),
    price: 60700,
  },
  {
    date: new Date(2019, 0, 21).toLocaleDateString(),
    price: 60900,
  },
  {
    date: new Date(2019, 0, 20).toLocaleDateString(),
    price: 60800,
  },
  {
    date: new Date(2019, 0, 19).toLocaleDateString(),
    price: 61000,
  },
  {
    date: new Date(2019, 0, 18).toLocaleDateString(),
    price: 61000,
  },
  {
    date: new Date(2019, 0, 17).toLocaleDateString(),
    price: 61000,
  },
  {
    date: new Date(2019, 0, 16).toLocaleDateString(),
    price: 61000,
  },
  {
    date: new Date(2019, 0, 15).toLocaleDateString(),
    price: 61000,
  },
  {
    date: new Date(2019, 0, 14).toLocaleDateString(),
    price: 60600,
  },
  {
    date: new Date(2019, 0, 13).toLocaleDateString(),
    price: 60500,
  },
  {
    date: new Date(2019, 0, 12).toLocaleDateString(),
    price: 60700,
  },
  {
    date: new Date(2019, 0, 11).toLocaleDateString(),
    price: 60700,
  },
  {
    date: new Date(2019, 0, 10).toLocaleDateString(),
    price: 60700,
  },
  {
    date: new Date(2019, 0, 9).toLocaleDateString(),
    price: 60100,
  },
  {
    date: new Date(2019, 0, 8).toLocaleDateString(),
    price: 59900,
  },
  {
    date: new Date(2019, 0, 7).toLocaleDateString(),
    price: 59800,
  },
  {
    date: new Date(2019, 0, 6).toLocaleDateString(),
    price: 59800,
  },
  {
    date: new Date(2019, 0, 5).toLocaleDateString(),
    price: 60300,
  },
  {
    date: new Date(2019, 0, 4).toLocaleDateString(),
    price: 60300,
  },
  {
    date: new Date(2019, 0, 3).toLocaleDateString(),
    price: 60400,
  },
  {
    date: new Date(2019, 0, 2).toLocaleDateString(),
    price: 59600,
  },
  {
    date: new Date(2019, 0, 1).toLocaleDateString(),
    price: 59700,
  },
];

const goldPrice = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="label">{`Price : ${payload[0].value}`}</div>
          <div className="label">{`Date : ${label} `}</div>
        </div>
      );
    }

    return null;
  };
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={cdata}
          margin={{ top: 5, right: 20, bottom: 50, left: 10 }}
        >
          <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" angle={-45} textAnchor="end" reversed />
          <YAxis domain={[50000, 130000]} allowDataOverflow={true} />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>

      <table className="mt-5">
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
            <th>Change from previous year</th>
            <th>Return %</th>
          </tr>
        </thead>
        <tbody align="right">
          <tr>
            <td>1/1/2019</td>
            <td>59700</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1/1/2020</td>
            <td>76000</td>
            <td>16300</td>
            <td>27.30 %</td>
          </tr>
          <tr>
            <td>1/1/2021</td>
            <td>92600</td>
            <td>16600</td>
            <td>21.84 %</td>
          </tr>
          <tr>
            <td>1/1/2022</td>
            <td>91900</td>
            <td>-700</td>
            <td>-0.75 %</td>
          </tr>
          <tr>
            <td>1/1/2023</td>
            <td>106300</td>
            <td>14400</td>
            <td>15.66 %</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default goldPrice;
