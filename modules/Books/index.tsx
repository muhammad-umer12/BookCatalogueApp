import React, {useEffect,useState} from 'react'
import {createStyles, Grid,makeStyles, Theme,Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@material-ui/core';
import { bookList } from '../../redux/actions';
//import { useDispatch, useSelector } from 'react-redux';
//import { AppState } from '../../redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    cotainer:{
        margin:'20px'
    }
  });



  
 function Book(props: any) {

     const [list,setList] = useState<any[]>([]);
 const   { bookList,state} = props
 const { listBook } = state.Book;
    


    useEffect(()=>{
        bookList();
    },[])

    useEffect(()=>{

        if(listBook?.length)
        {
            setList(listBook);
        }
    },[listBook])

    const classes = useStyles()
    return (
        <div className={classes.cotainer}>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Year</TableCell>
              <TableCell align="left">Description</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow key={row.id}>
           
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.year}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
             
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    )
}


const mapStateToProps = (state:any) => {
    return {  state : state }
}


const mapDispatchToProps = {
    bookList
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)