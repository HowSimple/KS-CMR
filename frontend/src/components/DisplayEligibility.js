import React,{useState}  from "react";
import {useNavigate} from "react-router-dom";
import {Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function DisplayEligibility({arr}){
    const statusColors = {
        ineligible: '#D66460',

        eligible: '#F0E666',
    }
    const showElements = arr.map((item, index) =>
        <TableRow key={index}>
            <TableCell align="right"   >
                {item.name}
            </TableCell>
            <TableCell align="right"   >
                {item.type}
            </TableCell>
            <TableCell align="right"  >
                {item.county}
            </TableCell>
            <TableCell align="right"   >
                {item.sentenceCompletionDate}
            </TableCell>
            <TableCell align="right"  sx={{color: item.eligible === true ? statusColors.eligible : statusColors.ineligible}}>
                {item.eligibleDate}
            </TableCell>

        </TableRow>

    );
    return (<Container > <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Charge name</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">County</TableCell>
                        <TableCell align="right">Sentence completion date</TableCell>
                        <TableCell align="right">Expungement eligibility date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {showElements}
                </TableBody>
            </Table>



        </TableContainer></Container>

    )
}
