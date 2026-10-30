const reservationForm = document.getElementById('reservation-form');

reservationForm.addEventListener('submit', event => {
  event.preventDefault();

  if (!reservationForm.reportValidity()) {
    return;
  }

  const formData = new FormData(reservationForm);
  const message = [
    'Olá, gostaria de solicitar informações sobre uma reserva na Mandota Eventos.',
    '',
    `Nome completo: ${formData.get('name')}`,
    `Telefone: ${formData.get('phone')}`,
    `E-mail: ${formData.get('email')}`,
    `Tipo de evento: ${formData.get('event')}`,
    `Salão pretendido: ${formData.get('venue')}`,
    `Data do evento: ${formData.get('date')}`,
    `Número estimado de convidados: ${formData.get('guests')}`,
    `Observações: ${formData.get('notes') || 'Nenhuma'}`
  ].join('\n');

  const whatsappUrl = new URL('https://wa.me/258845053440');
  whatsappUrl.searchParams.set('text', message);
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
