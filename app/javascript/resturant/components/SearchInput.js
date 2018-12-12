import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';


const styles = theme => ({
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.inputRef = React.createRef();
    // Debounce the passed in dispatch method
    this.onChange = debounce(this.props.onChange, this.props.debounceTimeout);
  }

  handleChange = e => {
    const val = e.target.value;
    this.setState({ value: val }, () => {
      this.onChange(val);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={this.handleChange}
        value={this.props.value}
      />
    );
  }
}

SearchInput.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.object,
  onChange: PropTypes.func,
  debounceTimeout: PropTypes.number,
};
export default withStyles(styles)(SearchInput);
