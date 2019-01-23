import React from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions/itemsActions";
import PropTypes from "prop-types";

class ShoppingList extends React.Component {
  componentWillMount () {
    this.props.fetchItems();
  };

  render() {
    if (this.props.data.isLoaded) {
      return (
        <div className="shopping-list">
          <h1>
            {this.props.data.items[0].event}
          </h1>
        </div>
      )
    } else {
      return (
        <div className="shopping-list">
          <h1> blleeeeee </h1>
        </div>
      )
    }
  }
}

ShoppingList.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.items.itemsData
});

export default connect(mapStateToProps, { fetchItems })(ShoppingList);
