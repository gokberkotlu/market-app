const Tags = () => {
    return (
        <>
            <h3>Tags</h3>
            <ul>
                <li>
                    <input type="checkbox" id="all-tag" name="tags" value="All" />
                    <label htmlFor="all-tag">All</label>
                </li>
                <li>
                    <input type="checkbox" id="beach-tag" name="tags" value="Beach" />
                    <label htmlFor="beach-tag">Beach</label>
                </li>
                <li>
                    <input type="checkbox" id="people-tag" name="tags" value="People" />
                    <label htmlFor="people-tag">People</label>
                </li>
                <li>
                    <input type="checkbox" id="bicycle-tag" name="tags" value="Bicycle" />
                    <label htmlFor="bicycle-tag">Bicycle</label>
                </li>
                <li>
                    <input type="checkbox" id="trees-tag" name="tags" value="Trees" />
                    <label htmlFor="trees-tag">Trees</label>
                </li>
                <li>
                    <input type="checkbox" id="ocean-tag" name="tags" value="Ocean" />
                    <label htmlFor="ocean-tag">Ocean</label>
                </li>
                <li>
                    <input type="checkbox" id="water-tag" name="tags" value="Water" />
                    <label htmlFor="water-tag">Water</label>
                </li>
                <li>
                    <input type="checkbox" id="animal-tag" name="tags" value="Animal" />
                    <label htmlFor="animal-tag">Animal</label>
                </li>
                <li>
                    <input type="checkbox" id="road-tag" name="tags" value="Road" />
                    <label htmlFor="road-tag">Road</label>
                </li>
                <li>
                    <input type="checkbox" id="rocks-tag" name="tags" value="Rocks" />
                    <label htmlFor="rocks-tag">Rocks</label>
                </li>
                <li>
                    <input type="checkbox" id="sunset-tag" name="tags" value="Sunset" />
                    <label htmlFor="sunset-tag">Sunset</label>
                </li>
            </ul>
        </>
    );
}
 
export default Tags;