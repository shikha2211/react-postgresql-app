import React from "react";
//import "./ActorList.css";

export function ActorList() {
	const [actors, setActors] = React.useState([]);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [totalPages, setTotalPages] = React.useState(0);

	React.useEffect(() => {
		//fetch('http://localhost:3001/actor')
		fetch(`http://localhost:3001/actor?page=${currentPage}`)
			.then(response => response.json())
			.then(data => {
				console.log(data),
					setActors(data.data);
				setTotalPages(data.totalPages);
			})
			.catch(error => console.error('Error:', error));
	}, [currentPage]);

	const handleFirstPage = () => {
		setCurrentPage(1);
	};

	const handlePrevPage = () => {
		setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
	};

	const handleNextPage = () => {
		if (currentPage < totalPages)
			setCurrentPage(currentPage + 1); // You might want to add a check to prevent going beyond the last page
	};

	const handleLastPage = () => {
		setCurrentPage(totalPages);
	};

	return (
		<div className="bg-white p-6 w-1/2 mx-auto">
			{/* <h1 class="text-3xl font-bold underline">
				Hello world!
			</h1>
			<p class="text-red-500">This text is colored in a vibrant red shade.</p> */}
			<h1 className="text-3xl my-10">Actors List</h1>
			<table className="w-custom-width h-custom-height border-collapse border border-gray-800">
				<thead>
					<tr>
						<th className="border border-gray-600">Actor ID</th>
						<th className="border border-gray-600">First Name</th>
						<th className="border border-gray-600">Last Name</th>
					</tr>
				</thead>
				<tbody>
					{
						actors.map(actor => {
							return (
								<tr  key={actor.actor_id}>
									<td className="border border-gray-600">{actor.actor_id}</td>
									<td className="border border-gray-600">{actor.first_name}</td>
									<td className="border border-gray-600">{actor.last_name}</td>
								</tr>
							);
						}
						)
					}
				</tbody>
			</table>
			<div className="flex justify-center">
			    <button className="rounded-lg border border-transparent mx-5 my-10 px-5 py-2 text-base font-medium leading-6 text-black bg-gray-400 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:border-blue-600"
				onClick={handleFirstPage}>{"<<"}</button>
				<button className="rounded-lg border border-transparent mx-5 my-10 px-5 py-2 text-base font-medium leading-6 text-black bg-gray-400 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:border-blue-600"
				onClick={handlePrevPage}>Previous</button>
				<button className="rounded-lg border border-transparent mx-5 my-10 px-5 py-2 text-base font-medium leading-6 text-black bg-gray-400 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:border-blue-600"
				onClick={handleNextPage}>Next</button>
				<button className="rounded-lg border border-transparent mx-5 my-10 px-5 py-2 text-base font-medium leading-6 text-black bg-gray-400 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:border-blue-600"
				onClick={handleLastPage}>{">>"}</button>
			</div>
		</div>
	);
}


