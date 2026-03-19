import { screen, fireEvent } from '@testing-library/react';
import FormField from '../FormField/FormField';
import { describe, it, expect, vi } from 'vitest'; 
import { renderWithTheme } from '../../../tests/test-utils'; 

describe('FormField component', () => {
  it('renders and calls onChange', () => {
    const handleChange = vi.fn(); // mock function

    // Rendu du composant avec le ThemeProvider MUI
    renderWithTheme(<FormField label="Nom" value="Alice" onChange={handleChange} />);

    // Vérifier que le champ est rendu
    const input = screen.getByLabelText(/Nom/i);
    expect(input).toBeInTheDocument();

    // Simuler un changement dans le champ
    fireEvent.change(input, { target: { value: 'Bob' } });

    // Vérifier que la fonction onChange a été appelée
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('displays error and helper text', () => {
    renderWithTheme(
      <FormField 
        label="Nom" 
        value="" 
        onChange={() => {}} 
        error={true} 
        helperText="Champ requis"
      />
    );

    // Vérifier que le helper text est affiché
    expect(screen.getByText(/Champ requis/i)).toBeInTheDocument();

    // Vérifier que le champ a l'état d'erreur
    const input = screen.getByLabelText(/Nom/i);
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
});