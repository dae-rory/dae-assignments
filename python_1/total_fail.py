def main():
    upper_limit = int(input("Enter an upper limit to generate prime numbers: "))
    prime_numbers = generate_primes(upper_limit)
    print(f"Prime numbers 3up to {upper_limit} are: {prime_numbers}")


if __name__ == "__main__":
    main()
