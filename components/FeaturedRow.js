import { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';
import sanityClient, { urlFor } from '../sanity';
import ResturantCard from './ResturantCard'

export default function FeaturedRow({title, description, id}) {

  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "featured" && _id == $id] {
      ...,
      resturants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      }, 
    }[0]
    `, { id }).then(data => {
      setResturants(data?.resturants);
    })
  });

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">
            {title}
        </Text>
        {/* <ArrowRightIcon color="#00CCBB" /> */}
      </View>

      <Text className="text-xs text-gray-500 px-4">
        {description}
      </Text>

      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15,
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
        {/* ResturantCards... */}
      {resturants?.map(resturant => (
        <ResturantCard 
        key={resturant._id}
        id={resturant._id}
        // imgUrl={resturant.image}
        imgUrl={urlFor(resturant.image).url()}
        title={resturant.name}
        rating={resturant.rating} 
        genre={resturant.type?.name}
        address={resturant.address}
        short_description={resturant.short_description}
        dishes={resturant.dishes} 
        long={resturant.long} 
        lat={resturant.lat} 
        />
      ))}

      </ScrollView>
    </View>
  )
}