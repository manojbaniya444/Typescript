//? Read only and optional properties
type creditCard = {
  readonly cardNumber: number; // *Read only property
  branch?: string; // *Optional property
};

// ?Using existing type
type cardNumber = {
  cardNumber: number;
};

type cardDate = {
  cardDate: string;
};

// *Using cardNumber and cardDate type to create new type and add additional property
type CardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

function getCardDetails(cardDetails: CardDetails): cardNumber {
  return { cardNumber: cardDetails.cardNumber };
}

console.log(
  getCardDetails({ cardNumber: 123456789, cardDate: "12/12", cvv: 123 })
);
// * Expected to get the cardNumber: 123456789
