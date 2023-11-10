import "styles/customSelect.css";

const CustomSelect = (props) => {
    return (
        <select
            className={"customSelectBox " + props.classNm}
            name={props.name}
            data-key={props.dataKey}
            onChange={props.onChange}
            defaultValue={props.value}
            id="">
            {
                props.options.map((option, idx) => (
                    <option
                        disabled={option.value === -1}
                        key={idx}
                        value={option.value}
                    >{option.label}</option>
                ))
            }
        </select>
    );
}

export default CustomSelect;