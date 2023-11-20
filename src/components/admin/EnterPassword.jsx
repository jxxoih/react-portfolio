const EnterPassword = (props) => {
    const colon = " : ";
    const regex = /./gi;
    const {password} = props;

    return (
        <div className="enterPwd">
            <p>
                Enter Password<span className="colon">{colon}</span>
                {password.replaceAll(regex, "*")}
            </p>
        </div>
    );
}

export default EnterPassword;