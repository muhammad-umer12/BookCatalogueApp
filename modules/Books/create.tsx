import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { bookCreate } from '../../redux/actions';
import { TextField,Paper,Button, makeStyles } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  useFormik
} from 'Formik';
import * as yup from 'yup';


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
const useStyles = makeStyles({
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: '10px',
        },
      },
    cotainer:{
        margin:'20px 0px'
        //padding:'10px'
    },
    innerForm:{
        padding: '20px'
    },
    fieldGap:{
        margin: '5px 0px'
    }
  });


 const CreateBook = (props:any) => {
    const [open, setOpen] = React.useState(false);
 
    const [list, setList] = useState<any[]>([]);
    const [progress,setProgress] = useState(false)
    const { bookCreate,state } = props;
    const { listBook } = state.Book;
    useEffect(() => {
        setList(listBook);
    }, [])

    useEffect(() => {
        debugger
        if(list.length > 0 && listBook.length > list.length)
        {
            setOpen(true);
            setTimeout(()=>{
                setOpen(false)
            },4000)
        }
    }, [listBook])
    const validationSchema = yup.object({
        title: yup
          .string()
          .required('Title is required'),
        year: yup
          .string()
          .required('Published yea ris reuired is required'),
        description: yup
        .string()
        .required('Published year is required'),
      });
    const formik = useFormik({
        initialValues: {
         title:'',year:'',description:''
         
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

        
          handleFormSubmit(values)

        },
        
        
      });
     
      const handleFormSubmit = (values:any)=>{
            setProgress(true)
        if(values.title != '' && values.year != '' && values.description != '')
        {
            formik.resetForm();
            
            bookCreate(values)
            setProgress(false)
       
      }

    }

  
     
    
      const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  const classes = useStyles()
  return (
    <div>
     
      <div className={classes.cotainer}>
          
      
      <Paper className={classes.innerForm} elevation={3}>
           <h1>Add Book</h1>
    
        <form onSubmit={formik.handleSubmit}>
        <TextField
         id="title" 
         name="title" 
         label="Title"
         variant="outlined"
         value={formik.values.title}
         onChange={formik.handleChange }
 
         error={formik.touched.title && Boolean(formik.errors.title)}
         helperText={formik.touched.title && formik.errors.title}
         className={classes.fieldGap}
          fullWidth/>

        <TextField 
             value={formik.values.year}
             onChange={formik.handleChange}
             error={formik.touched.year && Boolean(formik.errors.year)}
             helperText={formik.touched.year && formik.errors.year}
             className={classes.fieldGap}
        id="year" name="year" placeholder='year' label="Published year" variant="outlined" fullWidth/>

        <TextField
             value={formik.values.description}
             onChange={formik.handleChange}
             error={formik.touched.description && Boolean(formik.errors.description)}
             helperText={formik.touched.description && formik.errors.description}
             className={classes.fieldGap}
        id="description" name="description" label="Description" variant="outlined" fullWidth/>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" variant="outlined" placeholder="First Name" /> */}
          <Button   variant='contained'  color="primary" type="submit">
            {
                !progress?(
                    <p>Submit</p>
                ):
                (
                    <CircularProgress/>
                )
            }
            </Button>
        </form>
          
         
    
      </Paper>
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Book has been added successfully
        </Alert>
      </Snackbar>
    </div>
  );
};

 


const mapStateToProps = (state:any) => {
    return {  state : state }
}


const mapDispatchToProps = {
    bookCreate
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook)