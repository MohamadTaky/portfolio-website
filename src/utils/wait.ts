export default async function wait(duration: number) {
  return new Promise<null>((resolve) => setTimeout(resolve, duration));
}
