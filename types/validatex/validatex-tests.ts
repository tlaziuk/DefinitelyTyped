import {
    equalsTo,
    required,
    validate,
    isEmail,
    isNumber
} from "validatex";

const data = {
    id: 1,
    email: "test@example.com",
    password: "asd",
    confirmPassword: "asd",
};

validate(data, {
    email: isEmail("should be email"),
    id: isNumber("should be number"),
}, true);
