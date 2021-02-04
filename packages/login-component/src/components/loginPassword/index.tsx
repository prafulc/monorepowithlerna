import * as React from 'react';
import { Button, Paper, Input, Grid } from '@material-ui/core';

interface Props {
    handleClick?: any
}

export default class LoginPassword extends React.Component <Props> {
    static defaultProps: Props = {
        handleClick: () => {}
    }

    render() {
        return <Paper>
            <Grid container spacing={1}>
                <Grid item xs>
                    <Input defaultValue="Password" inputProps={{ 'aria-label': 'description' }} />
                    <Button variant="contained" color="primary" onClick={this.props.handleClick}>Login</Button>
                </Grid>
            </Grid>
        </Paper>;
    }
}