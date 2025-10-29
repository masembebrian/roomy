"use client"

import { supabase } from "./supabase"

export type PaymentMethod = "mtn_momo" | "airtel_money" | "paypal" | "visa"

export interface PaymentDetails {
  method: PaymentMethod
  amount: number
  currency: string
  phoneNumber?: string
  email?: string
  cardNumber?: string
  cardExpiry?: string
  cardCvv?: string
}

export interface PaymentResult {
  success: boolean
  transactionId?: string
  message: string
  error?: string
}

// MTN Mobile Money Payment
export async function processMTNMoMoPayment(
  phoneNumber: string,
  amount: number,
  bookingId: string,
): Promise<PaymentResult> {
  try {
    // In production, integrate with MTN MoMo API
    // For now, simulate the payment
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate transaction ID
    const transactionId = `MTN${Date.now()}`

    // Record payment in database
    const { error } = await supabase.from("payments").insert({
      booking_id: bookingId,
      amount: amount,
      currency: "UGX",
      payment_method: "mtn_momo",
      phone_number: phoneNumber,
      transaction_id: transactionId,
      status: "completed",
      created_at: new Date().toISOString(),
    })

    if (error) throw error

    return {
      success: true,
      transactionId,
      message: "Payment successful via MTN Mobile Money",
    }
  } catch (error) {
    console.error("MTN MoMo payment error:", error)
    return {
      success: false,
      message: "Payment failed",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

// Airtel Money Payment
export async function processAirtelMoneyPayment(
  phoneNumber: string,
  amount: number,
  bookingId: string,
): Promise<PaymentResult> {
  try {
    // In production, integrate with Airtel Money API
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const transactionId = `AIRTEL${Date.now()}`

    const { error } = await supabase.from("payments").insert({
      booking_id: bookingId,
      amount: amount,
      currency: "UGX",
      payment_method: "airtel_money",
      phone_number: phoneNumber,
      transaction_id: transactionId,
      status: "completed",
      created_at: new Date().toISOString(),
    })

    if (error) throw error

    return {
      success: true,
      transactionId,
      message: "Payment successful via Airtel Money",
    }
  } catch (error) {
    console.error("Airtel Money payment error:", error)
    return {
      success: false,
      message: "Payment failed",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

// PayPal Payment
export async function processPayPalPayment(email: string, amount: number, bookingId: string): Promise<PaymentResult> {
  try {
    // In production, integrate with PayPal API
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const transactionId = `PAYPAL${Date.now()}`

    const { error } = await supabase.from("payments").insert({
      booking_id: bookingId,
      amount: amount,
      currency: "USD",
      payment_method: "paypal",
      email: email,
      transaction_id: transactionId,
      status: "completed",
      created_at: new Date().toISOString(),
    })

    if (error) throw error

    return {
      success: true,
      transactionId,
      message: "Payment successful via PayPal",
    }
  } catch (error) {
    console.error("PayPal payment error:", error)
    return {
      success: false,
      message: "Payment failed",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

// Visa Card Payment
export async function processVisaPayment(
  cardNumber: string,
  cardExpiry: string,
  cardCvv: string,
  amount: number,
  bookingId: string,
): Promise<PaymentResult> {
  try {
    // In production, integrate with Stripe or similar payment gateway
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const transactionId = `VISA${Date.now()}`

    const { error } = await supabase.from("payments").insert({
      booking_id: bookingId,
      amount: amount,
      currency: "USD",
      payment_method: "visa",
      card_last_four: cardNumber.slice(-4),
      transaction_id: transactionId,
      status: "completed",
      created_at: new Date().toISOString(),
    })

    if (error) throw error

    return {
      success: true,
      transactionId,
      message: "Payment successful via Visa",
    }
  } catch (error) {
    console.error("Visa payment error:", error)
    return {
      success: false,
      message: "Payment failed",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
