import componentImg  from './assets/components.png';
import jsxImg from './assets/jsx-ui.png';
import propImg from './assets/config.png';
import sateImg from './assets/state-mgmt.png';




export const CORE_CONCEPTS=[
    {
        image:componentImg,
        title:'Components' ,
        description:'The Core UI building block.- compose the user interface by combining multiple components'
    },
    {
        image:jsxImg,
        title:'JSX',
        description:'Return(potentially dynamic)HTML(ish) code to define the actual markup that will be renderd.'
    },
    {
        image:propImg,
        title:'Props',
        description:'Make Components configurable(and thereforereusable)by passing input data to them'
    },
    {
        image:sateImg,
        title:'Static',
        description:'React-managed data which ,when changed, causes the component  to re-render& the UI to update'
    }
]