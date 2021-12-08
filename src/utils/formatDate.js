const formatDate = (date) => {
	const newDate = new Date(date).toDateString().split(" ").slice(1).join(" ");
	const days = newDate.split(" ").slice(0, 2).join(" ");
	const year = new Date(date).getFullYear();
	return `${days}, ${year}`;
};

export default formatDate;
