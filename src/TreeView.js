import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
    justifyContent:'center', alignItems:'center'
  },
});

export default function MovieTreeView() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="2019">
        <TreeItem nodeId="2" label="URI" />
        <TreeItem nodeId="3" label="Bala" />
        <TreeItem nodeId="4" label="Dream Girl" />
      </TreeItem>
      <TreeItem nodeId="5" label="2018">
        <TreeItem nodeId="6" label="Munna Bhai MBBS" />
        <TreeItem nodeId="7" label="Terminator" />
        <TreeItem nodeId="8" label="Narcos" />
      </TreeItem>
    </TreeView>
  );
}
