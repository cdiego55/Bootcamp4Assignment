import React from 'react';

class BuilingList extends React.Component {
	selectedUpdate() {
		const id = this.input.id;
		this.props.selectedUpdate(id);
	}

	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
		.filter(listing => {
			if (listing.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || listing.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
				return true;
			
			return false;
		})
		.map(directory => {
			return (
				<tr key={directory.id}
					onClick={() => selectedUpdate(directory.id)}
				>
					<td> {directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
