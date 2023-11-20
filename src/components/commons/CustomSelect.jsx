import "styles/customSelect.css";

const CustomSelect = (props) => {
    const {classNm, name, dataKey, onChange, value, options} = props;

    return (
        <select
            className={"customSelectBox " + classNm}
            name={name}
            data-key={dataKey}
            onChange={onChange}
            defaultValue={value}
            id="">
            {
                options.map((option, idx) => (
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