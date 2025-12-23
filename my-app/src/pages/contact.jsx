import React from "react";
import { Container, Grid, Typography, TextField, Button, Paper, Box, Snackbar, Alert } from "@mui/material";

export default function Contact() {
    const [form, setForm] = React.useState({ name: "", email: "", message: "" });
    const [snack, setSnack] = React.useState({ open: false, severity: "success", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!form.name.trim() || !form.email.includes("@") || !form.message.trim()) {
            setSnack({ open: true, severity: "error", message: "Fyll i namn, en giltig e-post och meddelande." });
            return;
        }

        // TODO: send form to backend or email service
        console.log("Contact form submitted:", form);
        setSnack({ open: true, severity: "success", message: "Meddelandet skickades! Vi hör av oss snart." });
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Kontakta oss
                    </Typography>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                        Har du frågor, samarbeten eller vill veta mer om våra produkter — skicka ett meddelande så återkommer vi.
                    </Typography>

                    <Paper sx={{ mt: 3, p: 3 }} elevation={1} component="form" onSubmit={handleSubmit}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField label="Namn" name="name" value={form.name} onChange={handleChange} fullWidth required />
                            <TextField label="E-post" name="email" value={form.email} onChange={handleChange} fullWidth required />
                            <TextField label="Meddelande" name="message" value={form.message} onChange={handleChange} fullWidth multiline minRows={4} required />

                            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button type="submit" variant="contained">Skicka</Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>Kontaktinformation</Typography>
                    <Typography variant="body2" color="text.secondary">
                        E-post: <strong>info@moveableuf.se</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">Telefon: <strong>012-345 67 89</strong></Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        Adress: Moveable UF<br />Orholmsgatan 4<br />652 15 Karlstad
                    </Typography>
                </Grid>
            </Grid>

            <Snackbar open={snack.open} autoHideDuration={4000} onClose={() => setSnack((s) => ({ ...s, open: false }))} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                <Alert severity={snack.severity} sx={{ width: "100%" }} onClose={() => setSnack((s) => ({ ...s, open: false }))}>
                    {snack.message}
                </Alert>
            </Snackbar>
        </Container>
    );
}