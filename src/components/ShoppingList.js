import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchItems, groupItems } from "../actions/itemsActions";
import ResultCard from "./ResultCard"

class ShoppingList extends React.Component {
  componentWillMount () {
    this.props.fetchItems();
  };

  render() {
    if (this.props.data.isLoaded) {
      return(<div className="shopping-list">
          {this.props.groupsData.groupedItems.map((group, index) => (
            <ResultCard
              groupData={group[Object.keys(group)[0]]}
              cardId={Object.keys(group)[0]}
              key={index}
            />
          ))}
        </div>);
    } else {
      return (
        <div className="shopping-list">
          <p>LOADING...</p>
        </div>
      )
    }
  }
}

ShoppingList.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  groupItems: PropTypes.func.isRequired,
  groupsData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.items.itemsData,
  groupsData: state.items.groupsData
});

export default connect(mapStateToProps, { fetchItems, groupItems })(ShoppingList);
