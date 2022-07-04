import {useForm} from "react-hook-form";
import {Divider, FormControl, FormHelperText, Grid, InputLabel, TextField, Typography} from "@material-ui/core";
import ShowFormDescription from "./showFormDescription";
import Counties from "../counties";


export default function Step1() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
       console.log(data)

    };
    const FormBody = () => (
        <FormControl onSubmit={handleSubmit(onSubmit)}>
            <InputLabel htmlFor="grouped-native-select"></InputLabel>

            <select defaultValue="Select state..."  label="State" {...register(`state`)}>
                <option value=''>Select state...</option>
                <option value={"KS"}>Kansas</option>
                <option value={"Other"}>Other</option>
            </select>

            <input type="submit" />

        </FormControl>
    )
    return (
        <ShowFormDescription form={FormBody()} description={"Enter your location to get started, only Kansas is supported currently."}> </ShowFormDescription>
    );
};

