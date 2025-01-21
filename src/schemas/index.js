import * as Yup from "yup";

export const loginContentSchema = Yup.object({
  email: Yup.string()
    .required("Please enter your correct email")
    .test(
      "is-valid",
      "Invalid email",
      (value) =>
        Yup.string().email().isValidSync(value)
    ),
  password: Yup.string()
    .min(8, "Invalid Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>~`])[A-Za-z\d!@#$%^&*(),.?":{}|<>~`]{8,}$/,
      "Incorrect Password"
    )
    .max(20, "Invalid Password")
    .required("Password is required"),
});

export const loginWithOtpSchema = Yup.object({
  email: Yup.string()
    .required("Please enter your email")
    .test(
      "is-valid",
      "Invalid email",
      (value) =>
        Yup.string().email().isValidSync(value)
    ),
});

export const otpSchema = Yup.object({
  otp: Yup.string()
    .required("OTP is required")
    .length(4, "OTP must be exactly 4 digits"),
});

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first name"),
  lastName: Yup.string().min(2).max(25).required("Please enter your last name"),
  phoneOrEmail: Yup.string()
    .required("Please enter your email")
    .test(
      "is-valid",
      "Invalid email",
      (value) =>
        Yup.string().email().isValidSync(value)
    ),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters.")
    .max(20, "Password must not exceed 20 characters.")
    .matches(
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>~`])[A-Za-z\d!@#$%^&*(),.?":{}|<>~`]{8,}$/,
      "Password must contain at least an number, special characters, Uppercase and lowercase letter"
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export const updatePasswordSchema = Yup.object({
  NewPassword: Yup.string()
    .min(8, "Password must be at least 8 characters.")
    .max(20, "Password must not exceed 20 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>~`])[A-Za-z\d!@#$%^&*(),.?":{}|<>~`]{8,}$/,
      "Password must contain at least an number, special characters, Uppercase and lowercase letter"
    )
    .required("Password is required"),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("NewPassword")], "Password should be same")
    .required("Password is required"),
});

export const forgetPasswordSchema = Yup.object({
  MobileForget: Yup.string()
    .required("Please enter your email")
    .test(
      "is-valid",
      "Invalid email",
      (value) =>
      Yup.string().email().isValidSync(value)
    ),
});

export const organizerSchema = Yup.object({
  name: Yup.string()
    .min(2, "Please enter at least 2 characters")
    .max(25, "You can enter a maximum of 25 characters")
    .required("Name is required"),
  textarea: Yup.string()
    .min(25, "Please enter at least 25 characters")
    .max(100, "You can enter a maximum of 100 characters")
    .required("Description is required"),
  category: Yup.string()
    .required("Please select a category"),
  city: Yup.string()
    .required("Please select a city"),
  startDate: Yup.date()
    .nullable()
    .min(new Date(), "Start date cannot be in the past")
    .required("Start date is required"),
  endDate: Yup.date()
    .nullable()
    .min(Yup.ref("startDate"), "End date cannot be before the start date")
    .required("End date is required"),
  startTime: Yup.string()
    .required("Start time is required"),
  endTime: Yup.string()
    .required("End time is required"),
  quantity: Yup.number()
    .typeError("Please enter a valid number")
    .positive("Quantity must be a positive number")
    .integer("Quantity must be a whole number")
    .required("Quantity is required"),
  price: Yup.number()
    .typeError("Please enter a valid price")
    .positive("Price must be a positive number")
    .required("Price is required"),
});

export const profileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  phoneOrEmail: Yup.string()
    .required('Required')
    .test(
      'is-valid',
      'Invalid email',
      (value) =>
        Yup.string().email().isValidSync(value)
    ),
});

export const FormSchema = Yup.object({
  FirstName: Yup.string().required("Please enter your name"),
  LastName: Yup.string().required("Please enter your message"),
  Email: Yup.string()
  .required('Required')
  .test(
    'is-valid',
    'Invalid email',
    (value) =>
      Yup.string().email().isValidSync(value)
  ),
  Description:Yup.string().required("Please enter description").min(10),
});

export const editModal = Yup.object({
  event_name: Yup.string()
    .required("please enter valid event name")
    .min(10),
    event_details: Yup.string()
    .required("please enter valid event name")
    .min(10),
});
