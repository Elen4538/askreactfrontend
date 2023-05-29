import React, {Component} from "react";
import Box from '@mui/material/Box';
import {Button, TextField} from "@mui/material";
export default class AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['first item']
        }


    };



    render () {
        return(
            <div>
                <Box>

                    here will be asker with fields and d button
                    <br/>
                    <br/>

                    <TextField id="outlined-basic" label="Enter your question" variant="outlined" fullWidth
                               value={"question"}/>
                    <TextField id="outlined-basic" label="Enter your email" ariant="outlined" fullWidth
                               value={"Email"}/>

                    {/*<Button variant="contained" color={"secondary"} onClick={handleClick}>*/}
                    {/*    Submit</Button>*/}
                </Box>


            </div>
        )
    }

}