import React  from "react";
import ChargeForm from "../components/ChargeForm";
import DisplayEligibility from "../components/DisplayEligibility";
import { useDispatch, useSelector} from "react-redux";
import NavBar from "../components/NavBar";
import {lastPage, nextPage} from "../rootSlice";
import Step1 from "../components/Step1";
import {Container} from "@material-ui/core";
const MainForm = () => {
    const formResults = useSelector(state => state.charges)
    const page = useSelector(state => state.currentPage)
    const dispatch = useDispatch()
    const nextForm = (e) => {
         e.preventDefault();
        dispatch(nextPage())
     };
    const previousForm = (e) => {
        e.preventDefault();
        if (page > 0)
            dispatch(lastPage())
    };
    return (<Container maxWidth="sm" ><NavBar currentPage={page} next={nextForm} previous={previousForm}></NavBar>

        {page === 0 && (<Step1></Step1>)}
        {page === 1 && (<ChargeForm/>)}
        {page === 2 && (<div> <DisplayEligibility arr={formResults}/></div>)}
    </Container>)
}

 export default MainForm
