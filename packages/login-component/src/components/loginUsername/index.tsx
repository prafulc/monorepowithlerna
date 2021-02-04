import * as React from 'react';
import { Button, Paper, Input, Grid } from '@material-ui/core';

interface Props {
    handleClick?: any
}

export default class LoginUsername extends React.Component <Props> {
    static defaultProps: Props = {
        handleClick: () => {}
    }

    render() {
        return <Paper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={this.props.handleClick}>Next</Button>
                </Grid>
            </Grid>
        </Paper>;
    }
}