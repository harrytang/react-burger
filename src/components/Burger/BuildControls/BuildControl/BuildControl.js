/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from "react";

import {makeStyles} from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const buildControl = (props) => {
    const classes = useStyles;

    return (
        <div>
            <Fab color="primary" aria-label="add" className={classes.fab} onClick={props.added}>
                <AddIcon/>
            </Fab>
            <b>{props.ctl.label}</b>
            {
                props.disabled ?
                    <Fab color="secondary" aria-label="edit" className={classes.fab} onClick={props.removed} disabled>
                        <RemoveIcon/>
                    </Fab> :
                    <Fab color="secondary" aria-label="edit" className={classes.fab} onClick={props.removed}>
                        <RemoveIcon/>
                    </Fab>
            }

        </div>
    )
};

export default buildControl;