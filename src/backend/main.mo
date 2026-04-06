import Array "mo:core/Array";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {
  type Inquiry = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  var nextId = 1;
  let inquiries = Map.empty<Nat, Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async () {
    if (name.size() == 0) { Runtime.trap("Name cannot be empty") };
    if (email.size() == 0) { Runtime.trap("Email cannot be empty") };
    if (message.size() == 0) { Runtime.trap("Message cannot be empty") };

    let inquiry : Inquiry = {
      id = nextId;
      name;
      email;
      message;
      timestamp = Time.now();
    };

    inquiries.add(nextId, inquiry);
    nextId += 1;
  };

  public shared ({ caller }) func deleteInquiry(id : Nat) : async () {
    if (not inquiries.containsKey(id)) { Runtime.trap("Inquiry not found") };
    inquiries.remove(id);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };

  public query ({ caller }) func getInquiry(id : Nat) : async Inquiry {
    switch (inquiries.get(id)) {
      case (?inquiry) { inquiry };
      case (null) { Runtime.trap("Inquiry not found") };
    };
  };

  public query ({ caller }) func getInquiriesByEmail(email : Text) : async [Inquiry] {
    inquiries.values().toArray().filter(
      func(inquiry) { inquiry.email == email }
    );
  };
};
