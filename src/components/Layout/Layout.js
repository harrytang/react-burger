/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from "react";
import Aux from '../../hoc/Aux';

const layout = (props) => (
    <Aux>
        <div>Navbar</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;