import React from "react";
import "./ActorList.css";

export function ActorList() {
	const [actors, setActors] = React.useState([]);
	const [currentPage, setCurrentPage] = React.useState(1);

	React.useEffect(() => {
		//fetch('http://localhost:3001/actor')
		fetch(`http://localhost:3001/actor?page=${currentPage}`)
			.then(response => response.json())
			.then(data => {
				console.log(data),
					setActors(data);
			})
			.catch(error => console.error('Error:', error));
	}, [currentPage]);

	const handlePrevPage = () => {
		setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
	  };
	
	  const handleNextPage = () => {
		setCurrentPage(currentPage + 1); // You might want to add a check to prevent going beyond the last page
	  };

	return (
		<div>
			<h1>Actors List</h1>
			<table id='actorsTable'>
				<thead>
					<tr>
						<th>Actor ID</th>
						<th>First Name</th>
						<th>Last Name</th>
					</tr>
				</thead>
				<tbody>
					{
						actors.map(actor => {
							return (
								<tr key={actor.actor_id}>
									<td>{actor.actor_id}</td>
									<td>{actor.first_name}</td>
									<td>{actor.last_name}</td>
								</tr>
							);
						}
						)
					}
				</tbody>
			</table>
			<div>
				<button onClick={handlePrevPage}>Previous</button>
				<button onClick={handleNextPage}>Next</button>
			</div>
		</div>
	);
}


