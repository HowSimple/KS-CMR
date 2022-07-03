import React from "react";
import {useFieldArray, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    FormControl,
    TextField,
    Typography
} from "@material-ui/core"
import {Container} from "@mui/material"
import {addCharges} from "../rootSlice";
import ShowFormDescription from "./showFormDescription";
import Counties from "../counties";
const CHARGE_TYPES = ["Guilty","Attempt","Conspiracy","Solicitation"]

export default function ChargeForm() {
    const { register, control, handleSubmit, reset, watch } = useForm({defaultValues:{}});
    const { fields, append, remove} = useFieldArray({
        control,
        name: "form"
    });
    const dispatch = useDispatch()
    const onSubmit = (data, event) =>{
        event.preventDefault()
        lookup(data);
    }
    const lookup = data =>
    {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify({charges: data.form})
        }
        fetch('http://localhost:3001/eligibility',requestOptions)
            .then(response => response.json())
            .then(response => {
               dispatch(addCharges({charges: response}))
            })
    }
    const formBody = () => (
        <Container maxWidth="sm" component ="form" onSubmit={handleSubmit(onSubmit)}>
            {fields.map((item, index) => {
                return (
                    <li key={item.id}>
                        <Card sx={{ maxWidth: 'sm' }}>
                            <CardContent>
                                <Typography component={'div'} sx={{ mb: 1.5 }}  style={{color:"text.secondary}}"}} >
                                    <TextField style={{ width: "200px",margin:"5px"}} type="text"  {...register(`form.${index}.name`)} label="Charge name"/>
                                    <br/>
                                    <label> Enter date of sentence completion</label>
                                    <input style={{ width: "200px",margin:"5px"}} type="date"  {...register(`form.${index}.sentenceCompletionDate`)} />
                                    <br/>
                                    <select defaultValue={"Select type of charge"} {...register(`form.${index}.type`)}>
                                        <option value={""} disabled>Select type of charge</option>
                                        <option value={CHARGE_TYPES[0] }>{CHARGE_TYPES[0]}</option>
                                        <option value={CHARGE_TYPES[1] }>{CHARGE_TYPES[1]}</option>
                                        <option value={CHARGE_TYPES[2] }>{CHARGE_TYPES[2]}</option>
                                        <option value={CHARGE_TYPES[3] }>{CHARGE_TYPES[3]}</option>
                                    </select>
                                    <select defaultValue={"Select county"} {...register(`form.${index}.county`)}>
                                        <option value=''>Select county</option>
                                        {Counties.map((item, i)=> { return (  <option key={`${index}.${i}`} value = {item}>{item}</option>)
                                        })}
                                    </select>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => remove(index)}>
                                    Remove
                                </Button>
                            </CardActions>
                        </Card>
                    </li>
                );
            })}
            <Container>
                <ButtonGroup>
                    <Button type="button" onClick={() => {   append({name:'',type:''});   }} >
                        Add another
                    </Button>
                    <Button type="button" onClick={() => reset({ form: [] })}> Clear </Button>
                    <Button type="submit" >Submit</Button>
                </ButtonGroup>
            </Container>
        </Container>
    )
    return (
      <ShowFormDescription form={formBody()} description={"Please enter your charges"}></ShowFormDescription>
    );
}
