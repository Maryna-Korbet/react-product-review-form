import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from 'components/ProductReviewForm/ProductReviewForm.module.css';

const products = ['Sweater', 'Keyboard', 'Sofa', 'Freezer'];

const validationSchema = Yup.object({
    product: Yup.string().required('Please select a product').oneOf(products),
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    title: Yup.string().required(),
    review: Yup.string().required(),
    rating: Yup.number().min(1).max(10).required(),
    date: Yup.date().default(() => new Date()),
    wouldRecommend: Yup.boolean().default(false),
});

const initialValues = {
    name: '',
    email: '',
    title: '',
    review: '',
    rating: '',
    date: new Date(),
    wouldRecommend: false,
    product: '',
};

export const ProductReviewForm = () => {
    const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
};

return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        <Form autoComplete="off" className={css.container}>
            <div className={css.title}>
                <p>Leave a review:</p>
            </div>
        <div>
            <label htmlFor="name">Full name</label>
            <div className={css.message}>
                <Field  name="name" type="text" placeholder="Full name" />
                <ErrorMessage  name="name"  />
            </div>
        </div>
        <div>
            <label htmlFor="email">Email address</label>
            <div className={css.message}>
                <Field name="email" type="text" placeholder="Email address" />
                <ErrorMessage  name="email" />
            </div>
        </div>
        <div>
            <label htmlFor="product">Product</label>
            <div className={css.message}>
                <Field name="product" as="select">
                <option value="">Select a product</option>
                    {products.map((product, idx) => (
                    <option value={product} key={idx}>
                    {product}
                </option>
                ))}
            </Field>
            <ErrorMessage  name="product" />
        </div>
        </div>
        <div>
            <label htmlFor="title">Title</label>
            <div className={css.message}>
                <Field name="title" type="text" placeholder="Title" />
                <ErrorMessage  name="title" />
        </div>
        </div>
        <div>
            <label htmlFor="review">Review</label>
            <div className={css.message}>
                <Field name="review" as="textarea" placeholder="Review" />
            <ErrorMessage  name="review" />
            </div>
        </div>
        <div>
            <label htmlFor="rating">Rating</label>
            <div className={css.message}>
                <Field name="rating" type="number" placeholder="Rating" />
                <ErrorMessage  name="rating" />
            </div>
        </div>
        <div>
            <div>
            <label htmlFor="wouldRecommend">
                <Field name="wouldRecommend" type="checkbox" />
                Would recommend
            </label>
                </div>
        </div>
        <button type="submit" className={css.button}>Submit</button>
        </Form>
    </Formik>
    );
};

