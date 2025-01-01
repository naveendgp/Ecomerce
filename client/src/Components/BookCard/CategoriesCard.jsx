
const CategoriesCard = ({Category}) => {

    return(
        <section className="mt-5 w-56 h-24 flex justify-center items-center mr-5 rounded-md border border-gray bg-gray-100 shadow-md">
            <h1>{Category}</h1>
        </section>
    )
}

export default CategoriesCard;