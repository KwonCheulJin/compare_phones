import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.from('phones').select('*, phone_colors(*)');
  console.log('🚀 ~ Home ~ data:', data);
  return <div>Hello</div>;
}
