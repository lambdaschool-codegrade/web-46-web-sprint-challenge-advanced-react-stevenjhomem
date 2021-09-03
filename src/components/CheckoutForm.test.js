import React from 'react';
import {render, screen, waitFor, rtl, queryByTestId, getByTestId, getByLabelText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details",() => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name:/i);
    userEvent.type(firstNameInput, 'Steven');

    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastNameInput, 'Homem');

    const addressInput = screen.getByLabelText(/Address:/i);
    userEvent.type(addressInput, '3576 W Clabber Creek Blvd');

    const cityInput = screen.getByLabelText(/City:/i);
    userEvent.type(cityInput, 'Fayetteville');

    const stateInput = screen.getByLabelText(/State:/i);
    userEvent.type(stateInput, 'Arkansas');

    const zipInput = screen.getByLabelText(/Zip:/i);
    userEvent.type(zipInput, '72704');
    
    const button = screen.getByRole('button', {name: /checkout/i,});
    userEvent.click(button);

    expect(screen.getByTestId("successMessage")).toBeInTheDocument();

});
