import {Divider, Grid,  Typography} from "@material-ui/core";

export default function ShowFormDescription({form, description}) {
    return (

        <Grid container spacing={2}>
            <Grid item xs>
                <Typography>{description} </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem>
            </Divider>
            <Grid item xs>
                {form}
            </Grid>

        </Grid>


    );
};

