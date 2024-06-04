import React from "react";
import {render, fireEvent } from "@testing-library";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", function () { 
    render(<NewBoxForm/>)
});

it("matches snapshot", function (){
    const { asFragment } = render(<NewBoxForm/>);
    expect(asFragment()).toMatchSnapshot();
});