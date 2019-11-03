import React from 'react';

class RemoveBuilding extends React.Component {
    selectedUpdate() {
		this.props.selectedUpdate(null);
	}

    removeBuilding(id) {       
		this.props.removeBuilding(id);
    }
    
    render() {
        const {building} = this.props;
		return (
			<div>
                {building &&
				<button 
				type="button" 
                onClick={() =>   {
                    this.removeBuilding(building);
                    this.setState({ state: this.state });
                    this.selectedUpdate();
                    }}>
                    Remove Building
                </button>
                }
			</div>
        ); 
    }
}

export default RemoveBuilding