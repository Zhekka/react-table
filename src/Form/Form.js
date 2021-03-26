import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import MaterialTable from "../MaterialTable/MaterialTable";
import Slider from '@material-ui/core/Slider';
import Typography from "@material-ui/core/Typography";


const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
        width: 100,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    root: {
        '& > *': {
            margin: 'auto',
            width: '25ch',

        },
    }
}));

let countID = 0;

export default function CustomizedSelects() {
    const classes = useStyles();

    const [age, setAge] = useState(20);
    const [name, setName] = useState('');
    const [userName, setUsername] = useState('');
    const [surname, setSurname] = useState('');
    const [checked, setChecked] = useState(true);

    const [stateForm, setStateForm] = useState([]);


    const onClick = () => {
        countID++;

        if (checked) {
            let tempObj = {
                userName: name + Date.now(),
                id: countID,
                age: age,
                firstName: name,
                lastName: surname
            }
            setStateForm(stateForm.concat([tempObj]));
        } else {
            let tempObj = {
                userName: userName,
                id: countID,
                age: age,
                firstName: name,
                lastName: surname
            }
            setStateForm(stateForm.concat([tempObj]));
        }


    }

    console.log(stateForm);

    const inputName = (event) => {
        setName(event.target.value);
    };

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const inputSurname = (event) => {
        setSurname(event.target.value);
    };

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    }

    const handleAge = (event, newValue) => {
        setAge(newValue)
    }

    return (
        <div className={classes.root}>
            <h1>Fill the form</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField onChange={inputName} label="Name"/>
                <TextField onChange={inputSurname} label="Last Name"/>


                <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleCheck} name="idAuto"/>}
                    label="Auto username"
                />
                {checked ? null : <TextField onChange={handleUsername} label="Input your username"/>}


                <div className={classes.root}>

                    <Typography id="age-slider">Age</Typography>
                    <PrettoSlider onChange={handleAge} valueLabelDisplay="auto" aria-label="age-slider"
                                  defaultValue={20}/>
                </div>


                <Button onClick={onClick} variant="contained" color="primary">
                    Submit
                </Button>
            </form>

            <MaterialTable userData={stateForm}/>
        </div>
    );
}
